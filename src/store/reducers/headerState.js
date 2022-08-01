import { CHANGE_HEADER_TITLES } from "../actionTypes/updateHeaderActionTypes";

const initialiState = {
    titles: [],
    icon: null
};

const headerState = (state = initialiState, action) => {
    switch (action.type) {
        case CHANGE_HEADER_TITLES:
            return{ 
                ...state,
                titles: [...action.payload]
            }
            
        default:
            return state
    }
};

export default headerState;
