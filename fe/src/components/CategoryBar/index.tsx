import { NavLink } from "react-router-dom";

const CategoryBar = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center gap-x-16 text-xl text-white py-4">
      <NavLink to="/">
        <div className="category cursor-pointer hover:text-blue-500">
          Trang chủ
        </div>
      </NavLink>
      <NavLink to="/films">
        <div className="category cursor-pointer hover:text-blue-500">Phim</div>
      </NavLink>
      <NavLink to="/">
        <div className="category cursor-pointer hover:text-blue-500">
          Sự kiện
        </div>
      </NavLink>
      <NavLink to="/">
        <div className="category cursor-pointer hover:text-blue-500">
          Liên hệ
        </div>
      </NavLink>
    </div>
  );
};
export default CategoryBar;
