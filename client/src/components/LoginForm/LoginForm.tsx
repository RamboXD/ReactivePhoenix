import { useState } from "react";
import { login } from "../../store/reducers/useAuth";
import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const isAuth = useSelector((state: any) => state.authReducer.isAuth);

  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const buttonHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // console.log("clicked");
    await dispatch(login({ email, password }));
    if (isAuth) {
      navigate("/");
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-pur-700 underline">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-black-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              onClick={buttonHandler}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a
            href="/registration"
            className="font-medium text-black-600 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
