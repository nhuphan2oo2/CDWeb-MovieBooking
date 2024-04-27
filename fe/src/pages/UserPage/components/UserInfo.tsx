import { useState } from "react";
import clsx from "clsx";

const UserInfo = () => {
  const [visibleForm, setVisibleForm] = useState(false);
  const handleClickUpdate = () => {
    setVisibleForm(!visibleForm);
  };

  const modalClass = clsx(
    "bg-gray-900 w-[550px] h-fit p-5 rounded flex flex-col gap-3 ",
    visibleForm
      ? "animate-update-form translate-y-1/2"
      : "animate-update-form-closed "
  );
  return (
    <div className="flex flex-col w-3/4 gap-5 p-5">
      <div className="flex flex-col gap-3">
        <div className="text-[22px] font-light uppercase">
          Thông tin cá nhân
        </div>
        <div className=" bg-gray-900 h-[2px] rounded-md"></div>
      </div>
      <div className="flex flex-col gap-1 font-light">
        <div>Phan Thi Quynh Nhu</div>
        <div>31/12/2002</div>
        <div>hallo@gmail.com</div>
        <div>0819555888</div>
      </div>
      <div>
        <label
          onClick={handleClickUpdate}
          htmlFor="update-form"
          className="px-8 py-3 text-white bg-gray-900 rounded cursor-pointer hover:bg-gray-800 w-fit h-fit"
        >
          Cập nhật
        </label>
        {visibleForm && (
          <div
            id="update-form"
            className="fixed top-0 left-0 z-10 flex content-center justify-center w-full h-screen overflow-hidden bg-opacity-50 bg-slate-600"
          >
            <div className={modalClass}>
              <div className="mb-2 text-2xl font-light text-center uppercase">
                Thông tin cá nhân
              </div>
              <div className="flex items-center gap-6">
                <div className="w-1/4 font-light">Họ tên</div>
                <input
                  type="text"
                  value={"Phan Thi Quynh Nhu"}
                  className="w-2/3 p-2 text-gray-900 rounded outline-none"
                />
              </div>
              <div className="flex items-center gap-6">
                <div className="w-1/4 font-light">Ngày sinh</div>
                <input
                  type="date"
                  value="2002-12-31"
                  className="w-2/3 p-2 text-gray-900 rounded outline-none"
                />
              </div>
              <div className="flex items-center gap-6">
                <div className="w-1/4 font-light">Email</div>
                <input
                  type="text"
                  value={"qinhuuuuu@gmail.com"}
                  className="w-2/3 p-2 text-gray-900 rounded outline-none"
                />
              </div>
              <div className="flex items-center gap-6">
                <div className="w-1/4 font-light">Số điện thoại</div>
                <input
                  type="text"
                  value={"0939666444"}
                  className="w-2/3 p-2 text-gray-900 rounded outline-none"
                />
              </div>
              <div className="flex justify-end gap-5 mt-3 mr-5">
                <div
                  onClick={handleClickUpdate}
                  className="px-5 py-2 text-gray-900 bg-white rounded cursor-pointer hover:bg-gray-500"
                >
                  Huỷ
                </div>
                <div className="px-5 py-2 text-gray-900 bg-white rounded cursor-pointer hover:bg-gray-500">
                  Lưu thay đổi
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserInfo;
