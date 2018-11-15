import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import signupreducer from "./signupreducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  Login: LoginReducer,
  form: formReducer,
  signup: signupreducer
});

export default rootReducer;
