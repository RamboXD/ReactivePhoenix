import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { checkAuth } from "./store/reducers/useAuth";
// import { useAppDispatch } from "./hooks/redux";

const App = () => {
  const isAuth = useSelector((state: any) => state.authReducer.isAuth);
  // console.log(isAuth);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     dispatch(checkAuth());
  //   }
  // }, []);

  return (
    <Routes>
      <Route path="/" element={isAuth ? <Home /> : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default App;
