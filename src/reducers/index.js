import { combineReducers } from "redux";

import { app } from "./app.reducer";
import { authentication } from "./authentication.reducer";
import { food } from "./food.reducer";

const rootReducer = combineReducers({
  app, // appReducer
  authentication,
  food
});

export default rootReducer;
