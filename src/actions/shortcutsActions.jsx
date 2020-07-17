import {
  ADD_SHORTCUT,
  EDIT_SHORTCUT,
  REMOVE_SHORTCUT,
} from "../actions/actionTypes";

export const addShortcut = (payload) => {
  return { type: ADD_SHORTCUT, payload };
};

export const editShortcut = (payload) => {
  return { type: EDIT_SHORTCUT, payload };
};

export const removeShortcut = (payload) => {
  return { type: REMOVE_SHORTCUT, payload };
};

