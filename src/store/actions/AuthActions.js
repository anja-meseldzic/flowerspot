import axios from "axios";
import AuthService from "../../api/AuthService";
import { getUserInfo } from "./UserActions";

export const setToken = (payload) => ({
  type: "SET_TOKEN",
  payload,
});

export const logOut = () => ({
  type: "LOG_OUT",
});

export const login = (payload) => {
  return (dispatch) => {
    AuthService.login(payload)
      .then((res) => {
        localStorage.setItem("token", res.data.auth_token);
        dispatch(setToken(res.data.auth_token));
        dispatch(getUserInfo())
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };
};

export const registerUser = (payload) => {
  return (dispatch) => {
    AuthService.register(payload)
      .then((res) => {
        localStorage.setItem("token", res.data.auth_token);
        dispatch(setToken(res.data.auth_token));
        dispatch(getUserInfo())
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data.error);
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(logOut());
  };
};
