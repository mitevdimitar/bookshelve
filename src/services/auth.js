import { SIGN_ERROR, SIGN_SUCCESS } from "../store/actions/action_types";
import firebase from "./firebase";

// Signing up with Firebase
export const signup = async (email, password, firstName, lastName, dispatch) => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const user = response.user;
    user.updateProfile({
      displayName: `${firstName} ${lastName}`
    });

    dispatch({
      type: SIGN_SUCCESS,
      data: "Succesfully logged in!"
    });
    return user;
  } catch(err) {
    dispatch({
      type: SIGN_ERROR,
      data: err.message
    });
  }
};

// Signing in with Firebase
export const signin = (email, password, dispatch) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({
          type: SIGN_SUCCESS,
          data: "Succesfully logged in!"
        });
        return user;
      })
      .catch(err=>{
        dispatch({
          type: SIGN_ERROR,
          data: err.message
        });
        return err.message;
      })
};

//Signing out from Firebase
export const signout = () => {
  try {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        return {
          success: true
        }
      })
  } catch (err) {
    return {
      success: false,
      message: err.message
    }
  }
};