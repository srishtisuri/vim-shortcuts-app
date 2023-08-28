import {
  ADD_SHORTCUT,
  EDIT_SHORTCUT,
  REMOVE_SHORTCUT,
} from "../actions/actionTypes";

// const defaultState = [
//   {
//     id: 1,
//     command: "control p",
//     description: "Menu to open up a file",
//   },
//   {
//     id: 2,
//     command: "control b e",
//     description: "Toggles sidebar (opens explorer by default)",
//   },
//   {
//     id: 3,
//     command: "control b a",
//     description: "Toggles activity sidebar",
//   },
//   {
//     id: 4,
//     command: "control b b",
//     description: "Toggles breadcrumbs",
//   },
//   {
//     id: 5,
//     command: "control shift e",
//     description: "Opens explorer in sidebar",
//   },
//   {
//     id: 6,
//     command: "control shift f",
//     description: "Opens search in sidebar",
//   },
//   {
//     id: 7,
//     command: "control b o",
//     description: "Search for project and open it in existing window",
//   },
//   {
//     id: 8,
//     command: "control b shift o",
//     description: "Search for project and open in new window",
//   },
// ];
const defaultState = JSON.parse(localStorage.getItem("shortcuts"));

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SHORTCUT:
      return [...state, action.payload];
    case REMOVE_SHORTCUT:
      return [...state.filter((s) => s.id !== action.payload)];
    case EDIT_SHORTCUT:
      return [
        ...state.map((s) =>
          s.id === action.payload.id ? { ...s, ...action.payload } : s
        ),
      ];
    default:
      return state;
  }
};
