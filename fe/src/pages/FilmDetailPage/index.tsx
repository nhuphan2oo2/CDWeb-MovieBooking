import { useEffect, useState } from "react";
import filmApi from "../../apis/filmApi";
import { useParams } from "react-router-dom";
import { Film } from "../../type/type";

const FilmDetailPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState<Film>();
  useEffect(() => {
    window.scrollTo(0, 0);
    filmApi
      .get()
      .then((response) =>
        setFilm(
          response.data.pageProps.res.listMovie.find(
            (film: Film) => film.id === id
          ) ||
            response.data.pageProps.res.listComingMovie.find(
              (film: Film) => film.id === id
            )
        )
      )
      .catch((error) => console.error(error));
  }, [id]);
  console.log("film", film);
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {film && (
          <div className="flex w-full gap-16 py-2 px-20">
            <div className="w-1/4">
              <img
                className="rounded-xl border-4 border-gray-400"
                src={film.image}
                alt=""
              />
            </div>
            <div className="w-3/4 flex flex-col gap-5">
              <div className="text-3xl pb-1 border-b-2 w-fit">
                {film.name_vn}
              </div>
              <div className="flex flex-col gap-1 pb-5 border-b border-gray-400 w-4/5">
                <div>{film.type_name_vn + " - " + film.formats_name_vn}</div>
                <div>Đạo diễn:{" " + film.director}</div>
                <div>Ngày chiếu:{" " + film.release_date}</div>
                <div>Diễn viên:{" " + film.actor}</div>
                <div>Thời lượng:{" " + film.time + " phút"}</div>
              </div>
              <div className="text-[16px] pr-5 opacity-90 font-light text-black">
                {film.brief_vn}
              </div>
            </div>
          </div>
        )}
        <div className="px-20 py-4 flex flex-col gap-2">
          <div className="text-3xl uppercase w-fit border-b-2 border-gray-500 pb-1">
            Lịch chiếu
          </div>
          <div className="flex flex-col gap-6 justify-center p-4">
            <div className="border-b border-opacity-20 pb-4 border-black flex gap-10">
              <div className="py-4 px-10 text-center bg-gray-900 text-white rounded-md">
                10/04/2024
              </div>
              <div className="flex flex-wrap gap-3 justify-start items-center">
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  19:00
                </div>
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  20:10
                </div>
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  22:30
                </div>
              </div>
            </div>
            <div className="border-b border-opacity-20 pb-4 border-black flex gap-10">
              <div className="py-4 px-10 text-center bg-gray-900 text-white rounded-md">
                10/04/2024
              </div>
              <div className="flex flex-wrap justify-start gap-3 items-center">
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  19:00
                </div>
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  20:10
                </div>
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  22:30
                </div>
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  22:30
                </div>
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  22:30
                </div>
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  22:30
                </div>
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  22:30
                </div>
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  22:30
                </div>
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  22:30
                </div>
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  22:30
                </div>
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  22:30
                </div>
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
                  22:30
                </div>
                <div className="py-1 px-3 w-fit h-fit grid place-items-center bg-slate-300 text-black border border-black rounded-md">
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
