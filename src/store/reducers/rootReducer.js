import { combineReducers } from "redux";
import authReducer from "./authReducer";
import classReducer from "./classReducer";
import headerState from "./headerState";
import localStateReducer from "./localStateReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    header: headerState,
    classReducer: classReducer,
    local: localStateReducer
});

export default rootReducer;