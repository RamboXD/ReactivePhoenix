import { useState } from "react";
import { login, registration } from "../../store/reducers/useAuth";
import { useAppDispatch } from "../../hooks/redux";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

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
      <button onClick={() => dispatch(login({ email, password }))}>
        Логин
      </button>
      <button onClick={() => dispatch(registration({ email, password }))}>
        Регистрация
      </button>
    </div>
  );
};

export default LoginForm;
