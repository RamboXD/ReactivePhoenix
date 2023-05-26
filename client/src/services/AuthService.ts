import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    // console.log(email, password);
    return $api.post<AuthResponse>("api/accounts/sign_in", {
      email: email,
      hash_password: password,
    });
  }

  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("api/accounts/create", {
      account: {
        email: email,
        hash_password: password,
      },
    });
  }

  static async logout(): Promise<void> {
    // return $api.post("api/logout");
    return;
  }
}
