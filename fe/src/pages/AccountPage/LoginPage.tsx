import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userApi from "../../apis/userApi";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isValidLogin, setIsValidLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userName != "" && password != "") setIsValidLogin(true);
    else setIsValidLogin(false);
  }, [userName, password]);
  const handleLogin = (userName: string, password: string) => {
    userApi
      .login(userName, password)
      .then((response) => {
        response.data === "success" && navigate("/");
        localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex flex-col gap-y-3">
      <input
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        className="p-2 bg-white border rounded border-line"
        type="text"
        placeholder="Email hoặc số điện thoại (*)"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="p-2 bg-white border rounded border-line"
        type="password"
        placeholder="Mật khẩu (*)"
      />
      <button
        onClick={() => handleLogin(userName, password)}
        disabled={!isValidLogin}
        className={`p-2 bg-primary rounded hover:brightness-110 text-white ${
          !isValidLogin && "!bg-gray-400"
        }`}
      >
        Đăng nhập
      </button>
      <p
        onClick={() => {
          navigate("/forgot-password");
        }}
        className="underline cursor-pointer text-end hover:text-blue-400"
      >
        Quên mật khẩu?
      </p>
    </div>
  );
};

export default Login;
