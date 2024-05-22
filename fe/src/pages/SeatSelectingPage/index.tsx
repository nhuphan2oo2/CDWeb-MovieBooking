import { useEffect, useReducer, useState } from "react";
import { Film, SeatType, seatStatus } from "../../type/type";
import screen from "./assets/screen.png";
import filmApi from "../../apis/filmApi";
import { useParams } from "react-router-dom";
import { formatCurrency } from "../../utils";
import Seat from "./components/Seat";
import { add, initState, reducer, remove } from "./store";

const SeatSelectingPage = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const [seats, setSeats] = useState<SeatType[]>([
    { index: "A1", status: "available" },
    { index: "A2", status: "booked" },
    { index: "A3", status: "available" },
    { index: "A4", status: "unavailable" },
    { index: "A5", status: "available" },
    { index: "A6", status: "booked" },
    { index: "A7", status: "available" },
    { index: "A8", status: "unavailable" },
    { index: "A9", status: "available" },
    { index: "A10", status: "booked" },
    { index: "A11", status: "available" },
    { index: "A12", status: "unavailable" },
    { index: "A13", status: "available" },
    { index: "A14", status: "booked" },
    { index: "A15", status: "available" },
    { index: "A16", status: "unavailable" },
    { index: "A17", status: "available" },
    { index: "A18", status: "booked" },
    { index: "A19", status: "available" },
    { index: "A20", status: "unavailable" },
    { index: "A21", status: "available" },
    { index: "A22", status: "booked" },
    { index: "A23", status: "available" },
    { index: "A24", status: "unavailable" },
    { index: "A25", status: "available" },
    { index: "A26", status: "booked" },
    { index: "A27", status: "available" },
    { index: "A28", status: "unavailable" },
    { index: "A29", status: "available" },
    { index: "A30", status: "booked" },
    { index: "A31", status: "available" },
    { index: "A32", status: "unavailable" },
    { index: "A33", status: "available" },
    { index: "A34", status: "booked" },
    { index: "A35", status: "available" },
    { index: "A36", status: "unavailable" },
    { index: "A37", status: "available" },
  ]);
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const { id } = useParams();

  const [film, setFilm] = useState<Film>();

  useEffect(() => {
    id &&
      filmApi
        .get(id)
        .then((response) => {
          setFilm(response.data);
        })
        .catch((error) => console.error(error));
  }, []);

  const toggleSeat = (index: string, status: seatStatus | undefined) => {
    if (status === "booked" || status === "unavailable") return;

    state.selectedSeats.includes(index)
      ? dispatch(remove(index))
      : dispatch(add(index));
  };

  return (
    <div className="flex flex-col gap-5 mx-auto mt-6 max-w-7xl ">
      <div className="text-center text-[30px] leading-6">Chọn ghế</div>
      <div className="flex gap-10">
        <div className="flex flex-col items-center w-2/3 gap-6 select-none">
          <div className="flex flex-col items-center justify-center">
            <div className="text-[22px] uppercase">Màn hình</div>
            <img src={screen} className="w-2/3" alt="" />
          </div>
          <div className="grid grid-cols-12 gap-1">
            {seats.map((seat, index) => {
              let letter = letters[Math.floor(index / 12)];
              index >= 12 ? (index = index % 12) : (index = index);
              return (
                <Seat
                  onClick={() => toggleSeat(letter + (index + 1), seat.status)}
                  index={letter + (index + 1)}
                  status={seat.status}
                />
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-x-14 gap-y-2">
            <div className="flex items-center gap-1">
              <div className="h-6 aspect-[1.05] border rounded-sm border-black"></div>
              <div>Ghế trống</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-6 aspect-[1.05] border rounded-sm border-black bg-red-400"></div>
              <div>Ghế đã bán</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-6 aspect-[1.05] border rounded-sm border-black bg-green-400"></div>
              <div>Đang chọn</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-6 aspect-[1.05] border rounded-sm border-black bg-gray-400"></div>
              <div>Không chọn được</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 border rounded text-primary border-primary">
          <div className="py-3 px-5 border-b border-primary text-[18px]">
            Screen 3 - 5/4/2024 - Suất chiếu: 20h15
          </div>
          <div className="flex flex-col px-5 py-3 border-b border-primary">
            <div className="text-[20px] font-bold">{film?.name_vn}</div>
            <div>{state.selectedSeats.length} vé</div>
            <div className="flex items-center justify-between">
              <div className="w-1/2">{state.selectedSeats.join(", ")}</div>
              <div>{formatCurrency(50000 * state.selectedSeats.length)}</div>
            </div>
          </div>
          <div className="flex my-2 justify-between py-3 px-5 text-[20px] font-bold">
            <div className="">Tổng tiền</div>
            <div>{formatCurrency(50000 * state.selectedSeats.length)}</div>
          </div>
          <button className="py-3 text-[18px] uppercase mx-5 text-white rounded bg-primary">
            Thanh toán
          </button>
          <a
            href=""
            className="mx-auto my-4 leading-3 border-b w-fit border-primary"
          >
            Quay lại
          </a>
        </div>
      </div>
    </div>
  );
};
export default SeatSelectingPage;
