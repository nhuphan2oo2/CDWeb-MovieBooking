import { useState } from "react";
import UserInfo from "./components/UserInfo";
import BookingHistory from "./components/BookingHistory";

const menu = ["Thông tin cá nhân", "Lịch sử giao dịch", "Đăng xuất"];
const UserPage = () => {
  const [place, setPlace] = useState(menu[0]);

  return (
    <div className="flex flex-col mx-auto max-w-7xl">
      <div className="text-[35px] text-center">Tài khoản của tôi</div>
      <div className="w-20 h-[3px] mx-auto mt-4 mb-2 bg-primary rounded-md "></div>
      <div className="flex gap-10">
        <div className="flex flex-col w-1/4 gap-5 px-10 py-5 duration-100 ">
          <div className="flex flex-col gap-3">
            <div className="text-[22px] font-light uppercase text-center">
              tài khoản
            </div>
            <div className=" bg-primary h-[2px] rounded-md"></div>
          </div>
          {menu.map((item) => {
            return (
              <div
                onClick={() => setPlace(item)}
                className={`pl-5 text-lg duration-100 cursor-pointer text-primary hover:font-bold ${
                  place === item ? " font-bold " : ""
                }`}
              >
                {item}
              </div>
            );
          })}
        </div>
        {place === menu[0] ? <UserInfo /> : <BookingHistory />}
      </div>
    </div>
  );
};
export default UserPage;
