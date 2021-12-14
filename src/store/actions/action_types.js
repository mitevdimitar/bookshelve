import { SET_ALL_BOOKS, SET_AUTHORS, SET_BOOK_MODAL_OPEN, SET_BOOK_MODE, SET_CURRENT_BOOK, SET_FILTERS_MODAL_OPEN, SET_FILTER_TYPE, SET_FILTER_VALUE } from "../constants";

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
    }),
    setFiltersModalOpen: (data) =>
      Object.assign({
        type: SET_FILTERS_MODAL_OPEN,
        data,
    }),
    setCurrentBook: (data) =>
      Object.assign({
        type: SET_CURRENT_BOOK,
        data,
    }),
    setBookMode: (data) =>
      Object.assign({
        type: SET_BOOK_MODE,
        data,
    }),
    setAuthors: (data) =>
      Object.assign({
        type: SET_AUTHORS,
        data,
    }),
    setAllBooks: (data) =>
      Object.assign({
        type: SET_ALL_BOOKS,
        data,
    }),
    setFilterType: (data) =>
      Object.assign({
        type: SET_FILTER_TYPE,
        data,
    }),
    setFilterValue: (data) =>
      Object.assign({
        type: SET_FILTER_VALUE,
        data,
    })
}