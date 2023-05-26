import { useState } from "react";
import { login, registration } from "../../store/reducers/useAuth";
import { useAppDispatch } from "../../hooks/redux";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-center w-full h-screen items-center px-5 py-4">
      <div className="flex flex-col h-full items-center justify-center gap-2">
        <input
          className="border-[1px]"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder="email"
        />
        <input
          className="border-[1px]"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="password"
        />
        <button
          className="border-[1px]"
          onClick={() => dispatch(login({ email, password }))}
        >
          Логин
        </button>
        <button
          className="border-[1px]"
          onClick={() => dispatch(registration({ email, password }))}
        >
          Регистрация
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
