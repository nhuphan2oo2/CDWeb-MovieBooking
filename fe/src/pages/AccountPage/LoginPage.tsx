import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userApi from "../../apis/userApi";
import { UserRole } from "../../enum";

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isValidLogin, setIsValidLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (email != "" && password != "") setIsValidLogin(true);
    else setIsValidLogin(false);
  }, [email, password]);
  const handleLogin = () => {
    userApi
      .login(email!, password!)
      .then((response) => {
        if (response.data.id != null) {
          if (response.data.role === UserRole.admin) {
            navigate("/admin");
            // response.data === "success" && navigate("/");
            localStorage.setItem("user", JSON.stringify(response.data));
            return;
          }
          if (response.data.role === UserRole.user) {
            navigate("/");
            // response.data === "success" && navigate("/");
            localStorage.setItem("user", JSON.stringify(response.data));
            return;
          }
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex flex-col gap-y-3">
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
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
        onClick={() => handleLogin()}
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
