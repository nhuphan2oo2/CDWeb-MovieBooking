import { useEffect, useState } from "react";
import filmApi from "../../apis/filmApi";
import { NavLink, useParams } from "react-router-dom";
import { Film } from "../../type/type";

const FilmDetailPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState<Film>();
  useEffect(() => {
    window.scrollTo(0, 0);
    id &&
      filmApi
        .get(id)
        .then((response) => setFilm(response.data))
        .catch((error) => console.error(error));
  }, [id]);

  console.log("film", film);
  return (
    <div>
      <div className="mx-auto mt-6 max-w-7xl">
        {film && (
          <div className="flex w-full gap-16 px-20 ">
            <div className="w-1/4">
              <img className="rounded " src={film.image} alt="" />
            </div>
            <div className="flex flex-col w-3/4 gap-5">
              <div className="pb-1 text-3xl border-b-2 w-fit">
                {film.name_vn}
              </div>
              <div className="flex flex-col w-4/5 gap-1 pb-5 border-b border-gray-400">
                <div>{film.type_name_vn + " - " + film.formats_name_vn}</div>
                <div>Đạo diễn:{" " + film.director}</div>
                <div>Ngày chiếu:{" " + film.release_date}</div>
                <div>Diễn viên:{" " + film.actor}</div>
                <div>Thời lượng:{" " + film.time + " phút"}</div>
              </div>
              <div className="text-[16px] pr-5  font-light text-black">
                {film.brief_vn}
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2 px-20 py-4">
          <div className="pb-1 text-3xl uppercase border-b-2 border-gray-500 w-fit">
            Lịch chiếu
          </div>
          <div className="flex flex-col justify-center gap-6 p-4">
            <div className="flex gap-10 pb-4 border-b border-black border-opacity-20">
              <div className="px-10 py-4 text-center text-white rounded bg-primary">
                10/04/2024
              </div>
              <div className="flex flex-wrap items-center justify-start gap-3">
                <NavLink to={`/seat-selecting/${film?.id}`}>
                  <div className="grid px-3 py-1 text-black border border-black rounded w-fit h-fit place-items-center bg-quaternary">
                    19:00
                  </div>
                </NavLink>
                <div className="grid px-3 py-1 text-black border border-black rounded w-fit h-fit place-items-center bg-quaternary">
                  20:10
                </div>
                <div className="grid px-3 py-1 text-black border border-black rounded w-fit h-fit place-items-center bg-quaternary">
                  22:30
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FilmDetailPage;
