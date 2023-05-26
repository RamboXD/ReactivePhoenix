import { useState } from "react";
import { login, registration } from "../../store/reducers/useAuth";
import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const buttonHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    await dispatch(login({ email, password }));
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  };
  const buttonHandlerRegister = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    await dispatch(registration({ email, password }));
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="password"
      />
      <button onClick={buttonHandler}>Логин</button>
      <button onClick={buttonHandlerRegister}>Регистрация</button>
    </div>
  );
};

export default LoginForm;
