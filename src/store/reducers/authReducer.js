import { SIGNIN_ERROR, SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from "../actionTypes/authActionTypes";

const initialiState = {
    isLoaded: false,
    isEmpty: false,
    authError: null,
    auth: null
};

const authReducer = (state = initialiState, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                isEmpty: false,
                authError: null,
                auth: action.payload
            };
        
        case SIGNIN_ERROR:
            return {
                ...state,
                authError: action.payload.data
            }    

        case SIGNOUT_SUCCESS:
            return {
                ...state,
                authError: null,
            };
        default:
            return state
    }
};

export default authReducer;
