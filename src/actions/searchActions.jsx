import { UPDATE_SEARCH_TEXT } from "./actionTypes";

export const updateSearchText = (payload) => {
  return { type: UPDATE_SEARCH_TEXT, payload };
};
