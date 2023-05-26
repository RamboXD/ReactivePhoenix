import { Link, useNavigate } from "react-router-dom";
import ControlItem from "./ControlItem";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/reducers/useAuth";
import { useSelector } from "react-redux";

const Controls: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector((state: any) => state.authReducer.isAuth);
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  useEffect(() => {
    if (isAuth) {
      setToken("yestoken");
    }
  }, []);
  const clear = async () => {
    // console.log("clicked");

    await localStorage.clear();
    await dispatch(logout());
    navigate("/");
  };
  // console.log(orage.getItem("token"));
  if (token.length > 0) {
    return (
      <div>
        <div className="flex flex-row justify-center w-full gap-6">
          <Link to="/login">
            <div onClick={clear}>
              <ControlItem label="Выход" onClick={() => {}} />
            </div>
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
