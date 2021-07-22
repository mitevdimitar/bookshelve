import { SIGNUP_SUCCESS, SIGNUP_ERROR } from "./action_types";
import firebase from "../../services/firebase";

// Signing up with Firebase
export const signup = (email, password) => async dispatch => {
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        console.log(data)
        dispatch({
          type: SIGNUP_SUCCESS,
          payload:
            "Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."
        });
      })
  } catch (err) {
    dispatch({
      type: SIGNUP_ERROR,
      payload:
        "Something went wrong, we couldn't create your account. Please try again."
    });
  }
};