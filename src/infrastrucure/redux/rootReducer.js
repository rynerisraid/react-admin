import { combineReducers } from "redux";
import counter from "./counter/reducers";
import ReduxDemo from "../../domain/ReduxDemo";

const rootReducer = combineReducers({
    ReduxDemo
});
  
export default rootReducer;
  