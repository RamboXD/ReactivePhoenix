import { Link } from "react-router-dom";
import ControlItem from "./ControlItem";

const Controls: React.FC = () => {
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
