import { UPDATE_LOCAL_CURRENT_CLASS } from "../actionTypes/authActionTypes";
import { CREATE_CLASSS_ERROR, CREATE_CLASSS_SUCCESS, JOIN_CLASS, JOIN_CLASS_ERROR } from "../actionTypes/classActionTypes";

const initialiState = {
    currentClass: null,
};

const classReducer = (state = initialiState, action) => {
    switch (action.type) {
        case JOIN_CLASS:
            return {
                ...state,
            };
        
        case JOIN_CLASS_ERROR:
            return {
                ...state,
            }    
        
        case UPDATE_LOCAL_CURRENT_CLASS:
            console.log('state', action.payload)
            return{
                ...state,
                currentClass: {
                    ...action.payload
                }
            }

        case CREATE_CLASSS_SUCCESS:
            console.log(action.payload)
            return state
            
        case CREATE_CLASSS_ERROR:
            console.log(action.payload)
            return state
            
        default:
            return state
    }
};

export default classReducer;
