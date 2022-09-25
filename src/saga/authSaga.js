import axios from "axios";
import { all, call, takeLatest, put } from "redux-saga/effects";
import { DO_LOGIN } from "../actions/actionTypes";
import { loginAPI } from "../utils/endpoints";
import { toast } from "react-toastify";
import { doLoginSuccess } from "../actions/authActions";
export function* doLogin(action) {
  try {
    const fetchURL = loginAPI;
    const res = yield call(doPost, fetchURL, action.payload);
    yield put(doLoginSuccess(res.data));
    sessionStorage.setItem("token", res.data.token);
  } catch (error) {
    toast(error.response.data.message);
  }
}

export function doPost(url, data) {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.post(url, JSON.stringify(data), { headers: headers });
}
export function* callDoLogin() {
  yield takeLatest(DO_LOGIN, doLogin);
}

export function* authSaga() {
  yield all([callDoLogin()]);
}
