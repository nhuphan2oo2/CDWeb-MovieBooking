import { useReducer, useState } from "react";
import clsx from "clsx";
import { UserType } from "../../../type/type";
import { save_change, initUser, userReducer } from "../store";

const UserInfo = () => {
  const [user, dispatch] = useReducer(userReducer, initUser);
  const [tempUser, setTempUser] = useState<UserType>(user);
  const [visibleForm, setVisibleForm] = useState(false);
  const handleClickCancel = () => {
    setTempUser(user);
  };
  const handleClickSave = () => {
    dispatch(save_change(tempUser));
  };

  const handleCloseForm = () => {
    document
      .querySelector("#form-user-info")
      ?.classList.remove("animate-update-form-open");
    document.querySelector("#form-user-info")?.classList.remove("flex");
    document
      .querySelector("#form-user-info")
      ?.classList.add("animate-update-form-close");
    setTimeout(() => {
      setVisibleForm(false);
    }, 300);
  };

  const modalClass = clsx(
    "bg-quaternary w-[550px] h-fit p-5 rounded flex-col gap-3 text-primary",
    visibleForm ? "animate-update-form-open flex" : "hidden "
  );
  return (
    <div className="flex flex-col w-3/4 gap-5 p-5">
      <div className="flex flex-col gap-3">
        <div className="text-[22px]  uppercase">Thông tin cá nhân</div>
        <div className=" bg-primary h-[2px] rounded-md"></div>
      </div>
      <div className="flex flex-col gap-1 ">
        <div>{user.name}</div>
        <div>{user.birth}</div>
        <div>{user.email}</div>
        <div>{user.phone}</div>
      </div>
      <div>
        <label
          onClick={() => setVisibleForm(!visibleForm)}
          htmlFor="update-form"
          className="px-8 py-3 text-white rounded cursor-pointer bg-primary hover:bg-secondary w-fit h-fit"
        >
          Cập nhật
        </label>
        {visibleForm && (
          <div
            id="update-form"
            className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen overflow-hidden bg-opacity-50 bg-primary"
          >
            <div id="form-user-info" className={modalClass}>
              <div className="mb-2 text-2xl text-center uppercase">
                Thông tin cá nhân
              </div>
              <div className="flex items-center gap-6">
                <div className="w-1/4 ">Họ tên</div>
                <input
                  type="text"
                  value={tempUser.name}
                  onChange={(e) =>
                    setTempUser((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-2/3 p-2 bg-white border rounded outline-none border-primary"
                />
              </div>
              <div className="flex items-center gap-6">
                <div className="w-1/4 ">Ngày sinh</div>
                <input
                  type="date"
                  value={tempUser.birth}
                  onChange={(e) =>
                    setTempUser((prev) => ({ ...prev, birth: e.target.value }))
                  }
                  className="w-2/3 p-2 pr-4 bg-white border rounded outline-none border-primary"
                />
              </div>
              <div className="flex items-center gap-6">
                <div className="w-1/4 ">Email</div>
                <input
                  type="text"
                  value={tempUser.email}
                  onChange={(e) =>
                    setTempUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-2/3 p-2 bg-white border rounded outline-none border-primary"
                />
              </div>
              <div className="flex items-center gap-6">
                <div className="w-1/4 ">Số điện thoại</div>
                <input
                  type="text"
                  value={tempUser.phone}
                  onChange={(e) =>
                    setTempUser((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="w-2/3 p-2 bg-white border rounded outline-none border-primary"
                />
              </div>
              <div className="flex justify-end gap-5 mt-3 mr-5">
                <div
                  onClick={() => {
                    handleClickCancel();
                    handleCloseForm();
                  }}
                  className="px-5 py-2 text-white rounded cursor-pointer bg-primary hover:bg-secondary"
                >
                  Huỷ
                </div>
                <div
                  onClick={() => {
                    handleClickSave();
                    handleCloseForm();
                  }}
                  className="px-5 py-2 text-white rounded cursor-pointer bg-primary hover:bg-secondary"
                >
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
