import { combineReducers } from "redux";
import shortcuts from "./shortcutsReducer";
import searchText from "./searchReducer";

export default combineReducers({
  shortcuts,
  searchText,
});
