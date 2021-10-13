import { SET_BOOK_MODAL_OPEN, SET_CURRENT_BOOK } from "../constants";

const initialState = {
    bookModalOpen: false,
    currentBook: null
  };
  
const booksReducer = (state = Object.assign({}, initialState), action) => {
    const { type, data } = action;
    switch (type) {
        case SET_BOOK_MODAL_OPEN:
            return Object.assign({}, state, {
                bookModalOpen: data,
            });
        case SET_CURRENT_BOOK:
            return Object.assign({}, state, {
                currentBook: data,
            });
        default:
            return state;
    }
};

export default booksReducer;