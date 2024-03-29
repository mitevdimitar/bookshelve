import { SET_ALL_BOOKS, SET_AUTHORS, SET_BOOK_MODAL_OPEN, SET_BOOK_MODE, SET_CURRENT_BOOK, SET_FILTERS_MODAL_OPEN, SET_FILTER_TYPE, SET_FILTER_VALUE } from "../constants";

const initialState = {
    bookModalOpen: false,
    filtersModalOpen: false,
    currentBook: null,
    bookMode: "add",
    authors: [],
    filterType: "author",
    filterValue: "",
    allBooks: []
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
        case SET_FILTER_TYPE:
            return Object.assign({}, state, {
                filterType: data,
            });
        case SET_FILTER_VALUE:
            return Object.assign({}, state, {
                filterValue: data,
            });
        case SET_ALL_BOOKS:
            return Object.assign({}, state, {
                allBooks: data,
            });
        default:
            return state;
    }
};

export default booksReducer;