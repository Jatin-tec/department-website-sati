import { JOIN_CLASS, JOIN_CLASS_ERROR } from "../actionTypes/joinClassActionTypes";

const initialiState = {
};

const joinClassReducer = (state = initialiState, action) => {
    switch (action.type) {
        case JOIN_CLASS:
            return {
                ...state,
            };
        
        case JOIN_CLASS_ERROR:
            return {
                ...state,
            }    

        default:
            return state
    }
};

export default joinClassReducer;
