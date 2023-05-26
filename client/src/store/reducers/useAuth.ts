import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import AuthService from "../../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import { API_URL } from "../../http";

interface UserData {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async function (userData: UserData) {
    const { email, password } = userData;
    // console.log(userData);
    const response = await AuthService.login(email, password);
    return response;
  }
);

export const registration = createAsyncThunk(
  "auth/registration",
  async function (userData: UserData) {
    const { email, password } = userData;
    const response = await AuthService.registration(email, password);
    return response;
  }
);

export const logout = createAsyncThunk("auth/logout", async function () {
  await AuthService.logout();
});

export const checkAuth = createAsyncThunk("auth/checkAuth", async function () {
  const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
    withCredentials: true,
  });
  return response;
});

interface userState {
  isAuth: boolean;
  user: IUser;
}

const initialState: userState = {
  isAuth: false,
  user: {} as IUser,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        localStorage.setItem("token", payload.data.token);
        state.isAuth = true;
        state.user = payload.data.user;
      })
      .addCase(login.rejected, (state, { payload }) => {
        console.log("login failed: Info -> ", state, payload);
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        localStorage.setItem("token", payload.data.token);
        state.isAuth = true;
        state.user = payload.data.user;
      })
      .addCase(registration.rejected, (state, { payload }) => {
        console.log("registration failed: Info -> ", state, payload);
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.isAuth = false;
        state.user = {} as IUser;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        console.log("logout failed: Info -> ", state, payload);
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        localStorage.setItem("token", payload.data.token);
        state.isAuth = true;
        state.user = payload.data.user;
      })
      .addCase(checkAuth.rejected, (state, { payload }) => {
        console.log("checkAuth failed: Info -> ", state, payload);
      });
  },
});

export default authSlice.reducer;
