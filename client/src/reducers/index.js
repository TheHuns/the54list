import { combineReducers } from "redux";
import userReducer from "./userReducer";
import peakReducer from "./peakReducer";

export default combineReducers({
  user: userReducer,
  peak: peakReducer
});
