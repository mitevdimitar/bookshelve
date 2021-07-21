import { combineReducers } from "redux";
import authReducer from "./auth";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    auth: authReducer
  })

export default rootReducer;