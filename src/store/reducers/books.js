import { SET_AUTHORS, SET_BOOK_MODAL_OPEN, SET_BOOK_MODE, SET_CURRENT_BOOK, SET_FILTERS_MODAL_OPEN } from "../constants";

const initialState = {
    bookModalOpen: false,
    filtersModalOpen: false,
    currentBook: null,
    bookMode: "add",
    authors: []
  };
  
const booksReducer = (state = Object.assign({}, initialState), action) => {
    const { type, data } = action;
    switch (type) {
        case SET_BOOK_MODAL_OPEN:
            return Object.assign({}, state, {
                bookModalOpen: data,
            });
        case SET_FILTERS_MODAL_OPEN:
            return Object.assign({}, state, {
                filtersModalOpen: data,
            });
        case SET_BOOK_MODE:
            return Object.assign({}, state, {
                bookMode: data,
            });
        case SET_CURRENT_BOOK:
            return Object.assign({}, state, {
                currentBook: data,
            });
        case SET_AUTHORS:
            return Object.assign({}, state, {
                authors: data,
            });
        default:
            return state;
    }
};

export default booksReducer;