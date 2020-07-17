import { UPDATE_SEARCH_TEXT } from "../actions/actionTypes";

const defaultState = "";

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      return (state = action.payload);
    default:
      return state;
  }
};
