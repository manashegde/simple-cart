import {
  GET_PRODUCTS_SUCCESS,
  SET_CURRENT_PAGE,
  SET_SELECTED_PRODUCT,
} from "../actions/actionTypes";

const initialState = {
  products: null,
  currentPage: 1,
  selectedProduct: null,
};
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
};
