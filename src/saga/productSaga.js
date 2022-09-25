import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS } from "../actions/actionTypes";
import { getProductsSuccess } from "../actions/products";
import { getPRoductsAPI } from "../utils/endpoints";
import qs from "qs"

export function* getProducts(action) {
  try {
    const fetchURL=`${getPRoductsAPI}?${qs.stringify(action.payload)}`
    const products = yield call(doGet, fetchURL);
    yield put(getProductsSuccess(products.data));
  } catch (error) {
    console.log(error);
  }
}

export function doGet(url) {
  //Maintain this in seperate AJAX helper file
  return axios.request({
    method: "get",
    url: url,
  });
}
export function* callGetProducts() {
  yield takeLatest(GET_PRODUCTS, getProducts);
}

export function* productsSaga() {
  yield all([callGetProducts()]);
}
