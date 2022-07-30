import { combineReducers } from "redux";
import authReducer from "./authReducer";
import joinClassReducer from "./joinClassReducer";
import localStateReducer from "./localStateReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    joinClass: joinClassReducer,
    local: localStateReducer
});

export default rootReducer;