import { SIGN_SUCCESS, SIGN_ERROR } from "../actions/action_types";

const initialState = {
    signError: false,
    message: "",
  };
  
const authReducer = (state = Object.assign({}, initialState), action) => {
    const { type, data } = action;
    switch (type) {
        case SIGN_SUCCESS:
            return Object.assign({}, state, {
                signError: false,
                message: data
            });
        case SIGN_ERROR:
            return Object.assign({}, state, {
                signError: true,
                message: data
            });
        default:
            return state;
    }
};

export default authReducer;