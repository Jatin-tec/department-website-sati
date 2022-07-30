import { TOGGLE_CREATE_CLASS_DIALOG, TOGGLE_JOIN_CLASS_DIALOG } from "../actionTypes/localStateReducerTypes";

export const toggleCreateClassDialog = () => {
    return (dispatch, getState) => {
        const state = getState();
        const createClassDialog  = state.local.createClassDialog ? false : true;
        
        dispatch({ type: TOGGLE_CREATE_CLASS_DIALOG, payload: { createClassDialog } });
    }
}

export const toggleJoinClassDialog = () => {
    return (dispatch, getState) => {
        const state = getState();
        const joinClassDialog  = state.local.joinClassDialog ? false : true;
        console.log(joinClassDialog, 'action')
        dispatch({ type: TOGGLE_JOIN_CLASS_DIALOG, payload: { joinClassDialog } });
    }
}

