import { combineReducers } from "redux";
import searchReducer from "./SearchReducer";
import historyReducer from "./HistoryReducer";
import optionsReducer from "./OptionsReducer";

const AllReducers = combineReducers({ searchReducer, historyReducer, optionsReducer });

export default AllReducers;
