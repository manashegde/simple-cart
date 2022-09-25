import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from "../actions/actionTypes";

const initialState = {
  items: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, { item: action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: [
          ...state.items.filter((item) => item.item.id !== action.payload.id),
        ],
      };
    case UPDATE_QUANTITY:
      
      return {
        ...state,
        items: [...state.items.map(i => {
          if(i.item.id === action.payload.item.id){
            return {...action.payload};
          }
          return {...i};
        })],
      };
    default:
      return state;
  }
};
