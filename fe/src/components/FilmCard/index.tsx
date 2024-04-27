import { IoTicketOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { Film } from "../../type/type";
import React from "react";

interface FilmCardProps {
  film: Film;
  type?: string;
}
const FilmCard: React.FC<FilmCardProps> = (props) => {
  const { film, type } = props;

  return (
    <div className="flex flex-col w-full gap-1 p-2 bg-slate-600">
      <div>
        <img className="h-[400px] w-full rounded-xl" src={film.image} />
      </div>
      <div className="flex gap-2 text-sm text-white">
        {/* <h1 className="w-8 p-1 text-center bg-red-600 rounded-md">{(film.name_vn.match(/\((.*?)\)/)[1] === "P") ? "T13" : film.name_vn.match(/\((.*?)\)/)[1]}</h1> */}
        <h1 className="border border-yellow-200 text-[13px] whitespace-nowrap rounded-md p-1 cursor-pointer">
          {film.type_name_vn}
        </h1>
        <h1 className="p-1 bg-green-400 rounded-md cursor-pointer">
          {film.formats_name_en}
        </h1>
      </div>
      <h1 className="text-[20px] text-white w-fit cursor-pointer hover:text-black">
        {film.name_vn}
      </h1>
      <div className="flex flex-row gap-1">
        <h1 className="text-white">Thời lượng:</h1>
        <h1 className="text-white cursor-pointer hover:text-black">
          {film.time + " "} phút
        </h1>
      </div>
      <div className="flex flex-row gap-1">
        <h1 className="text-white">Khởi chiếu:</h1>
        <h1 className="text-white cursor-pointer hover:text-black">
          {film.release_date && film.release_date.slice(0, 9)}
        </h1>
      </div>
      <div>
        {type === "Phim đang chiếu" ? (
          <div className="flex flex-row gap-2">
            <div className="bg-green-600 flex text-white w-[140px] h-[40px] rounded-md gap-1 p-1 cursor-pointer">
              <IoTicketOutline className="text-[20px] m-[6px]" />
              <h1 className="p-1 text-[14px] ">Đặt vé ngay</h1>
            </div>
            <div className="border-green-600 bg-slate-600 border-[2px] rounded-md grid place-items-center w-[40px] h-[40px] cursor-pointer hover:bg-green-400">
              <CiCircleInfo className="text-[25px] m-1" />
            </div>
          </div>
        ) : (
          <div className="flex flex-row gap-2">
            <div className="border-green-600 bg-slate-600 border-[2px] rounded-md place-items-center flex text-white w-[200px] h-[40px] hover:bg-green-400">
              <CiCircleInfo className="text-[25px] m-1" />
              <h1 className="p-1 text-[14px]">THÔNG TIN CHI TIẾT</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default FilmCard;
