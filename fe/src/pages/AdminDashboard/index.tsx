import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AccountsManagePage from "./AccountsManagePage";
import ReportPage from "./report";
import ShowtimesManagePage from "./ShowtimeManagePage";
import MoviesManagePage from "./OrdersManagePage";
import ScreensManagePage from "./ScreensManagePage";
import { UserType } from "../../type/type";
import { getUserFromSession } from "../../utils/User";
import { ToastContext } from "../../hooks/ToastMessage/ToastContext";
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType>();
  const toastContext = useContext(ToastContext);
  const tabs = [
    "Báo cáo thu nhập",
    "Quản lý lịch chiếu",
    "Quản lý phim",
    "Quản lý phòng chiếu",
    "Quản lý người dùng",
    "Đăng xuất",
  ];
  const [tabActive, setTabActive] = useState(tabs[0]);

  useEffect(() => {
    const u = getUserFromSession();
    setUser(() => (u ? u : undefined));
    u.role !== 1 && navigate("/");
  }, [user]);

  const handleClickTab = (tab: string) => {
    setTabActive(tab);
  };
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/account");
  };

  if (user?.role !== 1) {
    toastContext.showToast("Bạn không có quyền truy cập vào trang này");
    return;
  }

  return (
    <div className="flex w-full">
      <div className="flex flex-col items-center w-1/6 h-screen gap-4 shadow-lg">
        <div className="flex flex-col w-full text-base text-center uppercase">
          {tabs.map((tab) => {
            if (tab === "Đăng xuất") {
              return (
                <div
                  onClick={() => handleLogout()}
                  className={`py-2 m-1 rounded cursor-pointer border-b-gray-300 duration-100 hover:bg-primary hover:bg-opacity-70`}
                >
                  {tab}
                </div>
              );
            }
            return (
              <div
                onClick={() => handleClickTab(tab)}
                className={`py-2 m-1 rounded cursor-pointer border-b-gray-300 duration-100 hover:bg-primary hover:bg-opacity-70
                    ${tab === tabActive ? "bg-primary " : ""}
                    `}
              >
                {tab}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center w-5/6 gap-2 m-2">
        <div className="w-full h-10 rounded">
          {tabActive === tabs[0] && <ReportPage />}
          {tabActive === tabs[1] && <ShowtimesManagePage />}
          {tabActive === tabs[2] && <MoviesManagePage />}
          {tabActive === tabs[4] && <ScreensManagePage />}
          {tabActive === tabs[4] && <AccountsManagePage />}
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
