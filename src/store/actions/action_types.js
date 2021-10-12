import { SET_BOOK_MODAL_OPEN } from "../constants";

// SIGN IN AND SIGN UP
export const SIGN_SUCCESS = "SIGNUP_SUCCESS";
export const SIGN_ERROR = "SIGNUP_ERROR";

//SET LANGUAGE
export const SET_LANGUAGE = "SET_LANGUAGE"

//SET BOOKS

export const BooksActions = {
    setBookModalOpen: (data) =>
      Object.assign({
        type: SET_BOOK_MODAL_OPEN,
        data,
    })
}