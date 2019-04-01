import { combineReducers } from "redux";
import userReducer from "./userReducer";
import peakReducer from "./peakReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  user: userReducer,
  peak: peakReducer,
  error: errorReducer
});
