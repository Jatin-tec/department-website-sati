import { CHANGE_HEADER_TITLES } from "../actionTypes/updateHeaderActionTypes";

export const updateHeaderTitle = (titles) => {
    return (dispatch, getState) => {
        const state = getState();
        dispatch({ type: CHANGE_HEADER_TITLES, payload: titles });
    }
}
