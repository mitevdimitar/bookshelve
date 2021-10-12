import { SET_BOOK_MODAL_OPEN } from "../constants";

const initialState = {
    bookModalOpen: false
  };
  
const booksReducer = (state = Object.assign({}, initialState), action) => {
    const { type, data } = action;
    switch (type) {
        case SET_BOOK_MODAL_OPEN:
            return Object.assign({}, state, {
                bookModalOpen: data,
            });
        default:
            return state;
    }
};

export default booksReducer;