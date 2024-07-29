// src/redux/actions/authActions.js
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerStart,
  registerSuccess,
  registerFailure,
} from "../slices/authSlice";
import api from "../../utils/api";

export const loginRequest = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await api.post("/login", credentials);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const registerRequest = (userData) => async (dispatch) => {
  dispatch(registerStart());
  try {
    const response = await api.post("/register", userData);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export const logoutAction = () => (dispatch) => {
  // API çağrısı gerekiyorsa burada yapabilirsiniz
  dispatch(logout());
};
