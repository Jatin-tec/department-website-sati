import { TOGGLE_JOIN_CLASS_DIALOG, TOGGLE_CREATE_CLASS_DIALOG } from "../actionTypes/localStateReducerTypes";

const initialiState = {
    joinClassDialog: false,
    createClassDialog: false
};

export const localStateReducer = (state = initialiState, action) => {
    switch (action.type) {
        case TOGGLE_JOIN_CLASS_DIALOG:
            return {
                ...state,
                joinClassDialog: action.payload.joinClassDialog,
            };
        case TOGGLE_CREATE_CLASS_DIALOG:
            return {
                ...state,
                createClassDialog: action.payload.createClassDialog
            };
        default:
            return state
    }
};

export default localStateReducer;
