import { SIGN_SUCCESS, SIGN_ERROR } from "../actions/action_types";

const initialState = {
    hasSigned: false,
    message: "",
  };
  
const authReducer = (state = Object.assign({}, initialState), action) => {
    const { type, data } = action;
    switch (type) {
        case SIGN_SUCCESS:
        return Object.assign({}, state, {
            hasSigned: true,
            message: data
        });
        case SIGN_ERROR:
        return Object.assign({}, state, {
            hasSigned: false,
            message: data
        });
        default:
        return state;
    }
};

export default authReducer;