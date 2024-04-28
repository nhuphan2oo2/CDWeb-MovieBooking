import { NavLink } from "react-router-dom";

const CategoryBar = () => {
  return (
    <div className="flex items-center justify-center py-2 mx-auto text-xl font-semibold text-black max-w-7xl gap-x-16">
      <NavLink to="/">
        <div className="cursor-pointer category hover:text-white">
          Trang chủ
        </div>
      </NavLink>
      <NavLink to="/films">
        <div className="cursor-pointer category hover:text-white">Phim</div>
      </NavLink>
      <NavLink to="/">
        <div className="cursor-pointer category hover:text-white">Sự kiện</div>
      </NavLink>
      <NavLink to="/">
        <div className="cursor-pointer category hover:text-white">Liên hệ</div>
      </NavLink>
    </div>
  );
};
export default CategoryBar;
