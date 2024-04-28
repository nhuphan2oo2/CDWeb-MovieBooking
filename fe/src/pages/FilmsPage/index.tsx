import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilmCard from "../../components/FilmCard";
import filmApi from "../../apis/filmApi";
import { Film } from "../../type/type";

const types = ["Phim đang chiếu", "Phim sắp chiếu"];

const FilmsPage = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [type, setType] = useState<string>("Phim đang chiếu");

  useEffect(() => {
    filmApi
      .getAll("")
      .then((response) => {
        type === types[0]
          ? setFilms(response.data.pageProps.res.listMovie)
          : setFilms(response.data.pageProps.res.listComingMovie);
      })
      .catch((error) => console.error(error));
  }, [type]);

  return (
    <div className="relative mx-auto max-w-7xl">
      <div className="flex gap-8">
        <div className="flex flex-col w-1/5 gap-5 py-6 text-xl text-center uppercase">
          {types.map((t) => {
            return (
              <div
                className={`cursor-pointer hover:font-bold ${
                  type === t ? "font-bold duration-300" : ""
                }`}
                onClick={() => setType(t)}
                key={t}
              >
                {t}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center w-4/5 gap-6 py-5">
          <div className="grid w-full grid-cols-3 gap-8">
            {films.map((film) => {
              return (
                <Link to={`/film/${film.id}`}>
                  <FilmCard key={film.id} film={film} type={type} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FilmsPage;
