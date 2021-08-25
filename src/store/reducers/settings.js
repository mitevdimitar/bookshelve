import { SET_LANGUAGE } from "../actions/action_types";

const initialState = {
    lang: 'en'
  };
  
const settingsReducer = (state = Object.assign({}, initialState), action) => {
    const { type, data } = action;
    switch (type) {
        case SET_LANGUAGE:
            return Object.assign({}, state, {
                lang: data,
            });
        default:
            return state;
    }
};

export default settingsReducer;