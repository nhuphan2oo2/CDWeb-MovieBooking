import { IoSearch } from "react-icons/io5";

import logo from "../../assets/images/logo.png";
import CategoryBar from "../CategoryBar";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

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
            className="w-full px-3 py-1 text-lg leading-4 text-black outline-none placeholder:text-black placeholder:text-opacity-50 bg-tertiary"
          />
          <div className="pr-2 cursor-pointer hover:text-black">
            <IoSearch className=" text-[24px]" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-base cursor-pointer group/item">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
            className="w-8 rounded-full"
            alt="Avatar"
          />
          <div
            onClick={() => navigate("/account")}
            className="group-hover/item:opacity-70"
          >
            Đăng nhập
          </div>
        </div>
      </div>
      <CategoryBar />
    </div>
  );
};
export default Header;
