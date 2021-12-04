import { combineReducers } from "redux";
import sideNavToggle from '../Reducer/generic';


export const allReducer = combineReducers({
    navToggle:sideNavToggle
})
