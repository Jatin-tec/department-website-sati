import { CREATE_CLASSS_ERROR, CREATE_CLASSS_SUCCESS, JOIN_CLASS, JOIN_CLASS_ERROR } from "../actionTypes/classActionTypes";

const initialiState = {
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
