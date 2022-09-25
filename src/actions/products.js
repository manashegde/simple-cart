import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  SET_CURRENT_PAGE,
  SET_SELECTED_PRODUCT,
} from "./actionTypes";

export const getProducts = (payload) => {
  return {
    type: GET_PRODUCTS,
    payload: payload,
  };
};
export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: payload,
});
export const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload: payload,
});
export const setSelectedProduct = (payload) => ({
  type: SET_SELECTED_PRODUCT,
  payload: payload,
});
