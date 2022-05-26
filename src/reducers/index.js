import { combineReducers } from "redux";

import { appReducer } from "./app.reducer";
import { userReducer } from "./user.reducer";
import { foodReducer } from "./food.reducer";
import { productReducer} from "./product.reducer"

const rootReducer = combineReducers({
  appReducer, // appReducer
  userReducer,
  foodReducer,
  productReducer,
});

export default rootReducer;
