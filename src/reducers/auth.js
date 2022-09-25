import { DO_LOGIN_SUCCESS } from "../actions/actionTypes";

const initialState = {
  userInfo: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case DO_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};
