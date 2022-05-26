import { combineReducers } from "redux";

import { appReducer } from "./app.reducer";
import { authenticationReducer } from "./authentication.reducer";
import { foodReducer } from "./food.reducer";
import { productReducer} from "./product.reducer"

const rootReducer = combineReducers({
  appReducer, // appReducer
  authenticationReducer,
  foodReducer,
  productReducer
});

export default rootReducer;
