import { LOGOUT_SUCCESS, SIGNIN_ERROR, SIGNIN_SUCCESS } from "../actionTypes/authActionTypes";

const access = sessionStorage.getItem('access');
const refresh = sessionStorage.getItem('refresh');
const profile = sessionStorage.getItem('profile');

const initialiState = {
    isLoaded: access ? true : false,
    isEmpty: access ? false : true,
    authError: null,
    profile: access ? {
        ...JSON.parse(profile),
        access,
        refresh,
    } : null
};

const authReducer = (state = initialiState, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                isEmpty: false,
                authError: null,
                profile: {
                    ...JSON.parse(action.payload.profile)
                }
            };

        case SIGNIN_ERROR:
            console.log(action.payload)
            return {
                ...state,
                authError: action.payload.data
            }

        case LOGOUT_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isLoaded: false,
                isEmpty: true,
                profile: null
            };
        default:
            return state
    }
};

export default authReducer;
