import { useEffect, useState } from "react";
import filmApi from "../../apis/filmApi";
import { Link } from "react-router-dom";
import Banner from "./components/Banner";
import FilmCard from "../../components/FilmCard";
import { Film, Setting } from "../../type/type";
import CustomSlider from "../../components/CustomSlider";
import CategoryBar from "../../components/CategoryBar";

const types = ["Phim đang chiếu", "Phim sắp chiếu"];

const Homepage = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [comingFilms, setComingFilms] = useState<Film[]>([]);

  const settingsSlider: Setting = {
    arrows: true,
    autoplay: false,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
  };
  useEffect(() => {
    filmApi
      .getAll("")
      .then((response) => {
        setComingFilms(response.data.pageProps.res.listComingMovie);
        setFilms(response.data.pageProps.res.listMovie);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="">
      <Banner />

      <div className="flex flex-col gap-10 mx-auto mt-10 max-w-7xl ">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-3xl text-center ">PHIM ĐANG CHIẾU</h1>

          <CustomSlider
            settings={settingsSlider}
            children={films.map((film) => {
              return (
                <Link to={`/film/${film.id}`}>
                  <FilmCard
                    className="mx-2"
                    key={film.id}
                    film={film}
                    type={types[0]}
                  />
                </Link>
              );
            })}
          ></CustomSlider>
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="text-3xl text-center ">PHIM SẮP CHIẾU</h1>
          <CustomSlider
            settings={settingsSlider}
            children={comingFilms.map((film) => {
              return (
                <Link to={`/film/${film.id}`}>
                  <FilmCard
                    className="mx-2"
                    key={film.id}
                    film={film}
                    type={types[1]}
                  />
                </Link>
              );
            })}
          ></CustomSlider>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
