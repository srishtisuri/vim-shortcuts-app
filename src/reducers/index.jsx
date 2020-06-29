import { combineReducers } from "redux";
import shortcut from "./shortcutReducer";

export default combineReducers({
  shortcut: shortcut,
});
