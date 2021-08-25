import { combineReducers } from "redux";
import authReducer from "./auth";
import settingsReducer from "./settings";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    auth: authReducer,
    settings: settingsReducer
  })

export default rootReducer;