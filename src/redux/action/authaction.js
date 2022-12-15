import Cookies from "js-cookie";
import { authMeProcess, ForgotPWProsses, LoginProsses, RegisterProsses, ResetPWProsses } from "../../API/auth";

export function authLogin(payload) {
  return async (dispatch) => {
    try {
      const response = await LoginProsses(payload);
      const data = response.data;
      console.log("data =>", data);
      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function authRegister(payload) {
  return async (dispatch) => {
    try {
      let response = await RegisterProsses(payload);
      let data = response.data;
      console.log("data =>", data);
      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function authForgotPW(payload) {
    return async (dispatch) => {
      try {
        let response = await ForgotPWProsses(payload);
        let data = response.data;
        console.log("data =>", data);
        dispatch({
          type: "login",
          name: data?.user?.name,
          email: data?.user?.email,
          isAuth: true,
        });
        Cookies.set("myapps_token", data?.token);
        return data;
      } catch (err) {
        console.log(err);
        return err;
      }
    };
  }
  export function authResetPW(id,token,payload) {
    return async (dispatch) => {
      try {
        let response = await ResetPWProsses(id,token,payload);
        let data = response.data;
        console.log("data =>", data);
        dispatch({
          type: "login",
          name: data?.user?.name,
          email: data?.user?.email,
          password : data?.user?.password,
          isAuth: true,
        });
        Cookies.set("myapps_token", data?.token);
        return data;
      } catch (err) {
        console.log(err);
        return err;
      }
    };
  }

export function authMe(payload) {
    return async (dispatch) => {
      try {
        let response = await authMeProcess();
        let data = response.data;
  
        dispatch({
          type: "login",
          name: data?.user?.name,
          email: data?.user?.email,
          isAuth: true,
        });
  
        Cookies.set("myapps_token", data?.token);
        return data;
      } catch (err) {
        console.log(err);
        return err;
      }
    };
  }