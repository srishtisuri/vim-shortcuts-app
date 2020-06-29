import {
  ADD_SHORTCUT,
  EDIT_SHORTCUT,
  REMOVE_SHORTCUT,
} from "../actions/actionTypes";

export function addShortcut(payload) {
  return { type: ADD_SHORTCUT, payload };
}

export function editShortcut(payload) {
  return { type: EDIT_SHORTCUT, payload };
}

export function removeShortcut(payload) {
  return { type: REMOVE_SHORTCUT, payload };
}
