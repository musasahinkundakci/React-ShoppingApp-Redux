import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
export function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let addedItem = state.find(
        (cartItem) => cartItem.product.id === action.payload.product.id
      );
      if (addedItem) {
        let newState = state.map((cartItem) => {
          if (addedItem.product.id === cartItem.product.id) {
            cartItem.quantity += 1;
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }
    case actionTypes.REMOVE_FROM_CART:
      let newState = state.filter(
        (cartItem) => cartItem.product.id !== action.payload.product.id
      );

      return newState;
    default:
      return state;
  }
}
