import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import { changeCategoryReducer } from "./changeCategoryReducer";
import { productListReducer } from "./productListReducer";
import { cartReducer } from "./cartReducer";
export const rootReducer = combineReducers({
  categoryListReducer,
  changeCategoryReducer,
  productListReducer,
  cartReducer,
});
