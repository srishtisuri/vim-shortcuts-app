import {
  ADD_SHORTCUT,
  EDIT_SHORTCUT,
  REMOVE_SHORTCUT,
} from "../actions/actionTypes";

const defaultState = [
  {
    id: 1,
    command: "o",
    description: "Creates new line below in insert mode",
  },
  {
    id: 2,
    command: "Shift o",
    description: "Creates new line above in insert mode",
  },
  {
    id: 3,
    command: "x",
    description: "Deletes highlighted character",
  },
  {
    id: 4,
    command: "v",
    description: "Enters visual mode which enables text highlighting",
  },
  {
    id: 5,
    command: "Shift v",
    description: "Highlights entire line",
  },
];

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SHORTCUT:
      return [...state, action.payload];
    case REMOVE_SHORTCUT:
      return state.filter((s) => s.id !== action.payload);
    case EDIT_SHORTCUT:
      return [
        ...state.map((s) =>
          s.id === action.payload.id
            ? {
                ...s,
                command: action.payload.command,
                description: action.payload.description,
              }
            : s
        ),
      ];
    default:
      return state;
  }
};
