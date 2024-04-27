import FilmDetailPage from "../pages/FilmDetailPage";
import FilmsPage from "../pages/FilmsPage";
import Homepage from "../pages/Homepage";
import SearchPage from "../pages/SearchPage";
import UserPage from "../pages/UserPage";

const pathName = {
  homepage: "/",
  userPage: "/user",
  searchPage: "/search",
  filmsPage: "/films",
  filmPage: "/film/:id",
};

const routes = [
  { path: pathName.homepage, element: Homepage },
  { path: pathName.userPage, element: UserPage },
  { path: pathName.searchPage, element: SearchPage },
  { path: pathName.filmsPage, element: FilmsPage },
  { path: pathName.filmPage, element: FilmDetailPage },
];

export default routes;
