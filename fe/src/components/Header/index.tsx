import { IoSearch } from "react-icons/io5";

import logo from "../../assets/images/logo.png";
import CategoryBar from "../CategoryBar";
const Header = () => {
  return (
    <div className="w-full pt-1 text-black bg-tertiary">
      <div className="flex items-center justify-between mx-auto h-18 max-w-7xl">
        <a href="/">
          <img
            className="w-40 cursor-pointer "
            src={logo}
            alt="Ironhack logo"
          />
        </a>
        <div className="flex items-center justify-center w-[30%] border-2  border-black border-opacity-50 overflow-hidden rounded">
          <input
            id="search"
            type="search"
            placeholder="Tìm kiếm phim..."
            className="w-full px-3 py-1 outline-none text-[20px] placeholder:text-black placeholder:text-opacity-50 text-black bg-tertiary leading-4"
          />

          <div className="pr-2 cursor-pointer hover:text-black">
            <IoSearch className=" text-[24px]" />
          </div>
        </div>
        <div className="flex items-center gap-1 text-base ">
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
      <CategoryBar />
    </div>
  );
};
export default Header;
