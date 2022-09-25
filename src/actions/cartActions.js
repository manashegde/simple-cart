import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./actionTypes";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload: payload,
});
export const reoveFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload: payload,
});
export const updateQuantity = (payload) => ({
  type: UPDATE_QUANTITY,
  payload: payload,
});
