import { SIGNIN_ERROR, SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from "../actionTypes/authActionTypes";

const access =  sessionStorage.getItem('access');
const refresh = sessionStorage.getItem('refresh');
const profile = sessionStorage.getItem('profile');

const initialiState = {
    isLoaded: access ? true : false,
    isEmpty: access ? false : true,
    authError: null,
    auth: access ? {
        access,
        refresh,
        profile: JSON.parse(profile) 
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
                auth: {
                    ...action.payload,
                    profile: JSON.parse(action.payload.profile)
                }
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
