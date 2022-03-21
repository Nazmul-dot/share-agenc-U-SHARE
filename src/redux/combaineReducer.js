import { combineReducers } from "redux";
import userReducer from "./firebaseUsere/userReducer";
const rootReducer = combineReducers({
  USER: userReducer,
});
export default rootReducer;
