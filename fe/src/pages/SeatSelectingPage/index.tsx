import { useEffect, useReducer, useState } from "react";
import { Movie, SeatType, ShowTimeType } from "../../type/type";
import screen from "./assets/screen.png";
import { useLocation, useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils";
import Seat from "./components/Seat";
import { add, initState, reducer, remove } from "./store";
import movieApi from "../../apis/movieApi";
import showTimeApi from "../../apis/showTimeApi";
import seatApi from "../../apis/seatApi";
import { SeatStatus } from "../../enum";
import bookingHistoryApi from "../../apis/bookingHistoryApi";

const SeatSelectingPage = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [seats, setSeats] = useState<SeatType[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const movieId = searchParams.get("movieId");
  const showTimeId = searchParams.get("showTimeId");

  const [movie, setMovie] = useState<Movie>();
  const [showTime, setShowTime] = useState<ShowTimeType>();

  useEffect(() => {
    movieId &&
      movieApi
        .get(movieId)
        .then((response) => {
          setMovie(response.data);
        })
        .catch((error) => console.error(error));
    showTimeId &&
      showTimeApi
        .get(showTimeId)
        .then((response) => {
          setShowTime(() => response.data);
        })
        .catch((error) => console.error(error));
    showTimeId &&
      seatApi
        .getByScreenId(showTime?.screen?.id || -1)
        .then((response) => setSeats(response.data))
        .catch((error) => console.error(error));
  }, [movieId, showTime?.screen?.id, showTimeId]);

  const toggleSeat = (seat: SeatType) => {
    if (
      seat.status == SeatStatus.booked ||
      seat.status == SeatStatus.unavailable
    )
      return;
    if (
      state.selectedSeats.find((selectedSeat) => selectedSeat.id === seat.id)
    ) {
      dispatch(remove(seat));
    } else {
      seatApi.get(seat.id!).then((response) => {
        if (response.data.status === SeatStatus.booked)
          return alert(`Ghế ${seat.seatIndex} đã được đặt`);
      });
      dispatch(add(seat));
    }
  };
  const handlePayment = (
    userId: number,
    showTimeId: number,
    seats: SeatType[],
    discount: number,
    total: number
  ) => {
    if (!userId) return alert("Vui lòng đăng nhập để đặt vé");
    if (seats.length === 0) return alert("Vui lòng chọn ghế");
    seatApi.isBookingList(state.selectedSeats).then((response) => {
      if (response.status === 226) {
        const bookedSeats: SeatType[] = response.data;
        alert(
          `Ghế ${bookedSeats
            ?.map((seat) => seat.seatIndex)
            .join(", ")} đã được đặt`
        );
        bookedSeats.forEach((bookedSeat: SeatType) => {
          seats.forEach((seat) => {
            if (seat.id === bookedSeat.id) {
              seat.status = SeatStatus.booked;
              dispatch(remove(seat));
            }
          });
        });
        return console.log(`Ghế ${bookedSeats.join(", ")} đã được đặt`);
      } else if (response.status === 200) {
        bookingHistoryApi
          .add(userId, showTimeId, seats, discount, total)
          .then((response) => {
            response.status === 200
              ? navigate("/success-booking")
              : alert("Lỗi trong quá trình đặt vé");
          });
      }
    });
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
            {seats.map((seat) => {
              return (
                <Seat
                  key={seat.id}
                  onClick={() => {
                    toggleSeat(seat);
                  }}
                  seat={seat}
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
          <div className="py-3 px-5 border-b border-primary text-[18px] flex flex-col">
            <p>
              Screen {showTime?.screen?.id} -
              <strong> {showTime?.startTime?.slice(0, 10)}</strong>
            </p>
            <span>
              Suất chiếu: <strong>{showTime?.startTime?.slice(11, 16)}</strong>
            </span>
          </div>
          <div className="flex flex-col px-5 py-3 border-b border-primary">
            <div className="text-[20px] font-bold">{movie?.name_vn}</div>
            <div>{state.selectedSeats.length} vé</div>
            <div className="flex items-center justify-between">
              <div className="w-1/2">
                {state.selectedSeats
                  .map((selectedSeat) => selectedSeat.seatIndex)
                  .join(", ")}
              </div>
              <div>{formatCurrency(50000 * state.selectedSeats.length)}</div>
            </div>
          </div>
          <div className="flex my-2 justify-between py-3 px-5 text-[20px] font-bold">
            <div className="">Tổng tiền</div>
            <div>{formatCurrency(50000 * state.selectedSeats.length)}</div>
          </div>
          <button
            onClick={() =>
              handlePayment(
                1,
                1,
                state.selectedSeats,
                0,
                50000 * state.selectedSeats.length
              )
            }
            className="py-3 text-[18px] uppercase mx-5 text-white rounded bg-primary"
          >
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
