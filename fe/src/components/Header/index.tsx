import Search from "../Search";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <div className="w-full border-b-2 border-black">
      <div className=" h-20 max-w-7xl mx-auto flex justify-between items-center ">
        <a href="/">
          <img
            className="w-40 cursor-pointer "
            src={logo}
            alt="Ironhack logo"
          />
        </a>
        <Search />
        <div className="flex gap-1 text-base text-white items-center ">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
            className="w-8 rounded-full"
            alt="Avatar"
          />
          <div>Đăng nhập</div>
          <div>/</div>
          <div>Đăng ký</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
