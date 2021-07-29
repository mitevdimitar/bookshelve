import { SIGN_ERROR, SIGN_SUCCESS } from "../store/actions/action_types";
import firebase from "./firebase";

// Signing up with Firebase
export const signup = async (email, password, dispatch) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    dispatch({
      type: SIGN_SUCCESS,
      data: "Succesfully logged in!"
    });
    return true;
  } catch(err) {
    dispatch({
      type: SIGN_ERROR,
      data: err.message
    });
  }
};

// Signing in with Firebase
export const signin = (email, password, callback) => {
  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        //dispatch({ type: SIGNIN_SUCCESS });
        callback();
      })
  } catch (err) {
    console.log(err)
    /* dispatch({ type: SIGNIN_ERROR, payload: "Invalid login credentials" }); */
  }
};