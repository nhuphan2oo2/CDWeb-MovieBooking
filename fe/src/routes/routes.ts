import AccountPage from "../pages/AccountPage";
import ForgotPassPage from "../pages/AccountPage/FogotPassPage";
import FilmDetailPage from "../pages/FilmDetailPage";
import FilmsPage from "../pages/FilmsPage";
import Homepage from "../pages/Homepage";
import SearchPage from "../pages/SearchPage";
import SeatSelectingPage from "../pages/SeatSelectingPage";
import UserPage from "../pages/UserPage";

const pathName = {
  homepage: "/",
  userPage: "/user",
  searchPage: "/search",
  filmsPage: "/films",
  filmPage: "/film/:id",
  seatSelectingPage: "/seat-selecting/:id",
  accountPage: "/account",
  forgotPassPage: "/forgot-password",
};

const routes = [
  { path: pathName.homepage, element: Homepage },
  { path: pathName.userPage, element: UserPage },
  { path: pathName.searchPage, element: SearchPage },
  { path: pathName.filmsPage, element: FilmsPage },
  { path: pathName.filmPage, element: FilmDetailPage },
  { path: pathName.seatSelectingPage, element: SeatSelectingPage },
  { path: pathName.accountPage, element: AccountPage },
  { path: pathName.forgotPassPage, element: ForgotPassPage },
];

export default routes;
