import { Link } from "react-router-dom";
import ControlItem from "./ControlItem";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/reducers/useAuth";

const Controls: React.FC = () => {
  const dispatch = useAppDispatch();

  const [token, setToken] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken("yestoken");
    }
  }, []);
  // console.log(localStorage.getItem("token"));
  if (token.length > 0) {
    return (
      <div>
        <div className="flex flex-row justify-center w-full gap-6">
          <Link to="/login">
            <ControlItem
              label="Выход"
              onClick={() => {
                dispatch(logout());
              }}
            />
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-row justify-center w-full gap-6">
        <Link to="/login">
          <ControlItem label="Вход" onClick={() => {}} />
        </Link>
        <Link to="/registration">
          <ControlItem label="Регистрация" onClick={() => {}} />
        </Link>
      </div>
    </div>
  );
};

export default Controls;
