import { all, call } from "redux-saga/effects";
import { authSaga } from "./authSaga";
import { productsSaga } from "./productSaga";

export function* watcherSaga() {
  yield all([call(productsSaga), call(authSaga)]);
}
