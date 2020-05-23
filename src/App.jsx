import React, { useState } from "react";
import "./App.css";
import AddShortcut from "./AddShortcut";
import Shortcuts from "./Shortcuts";
import TopNav from "./Navbar";
import Header from "./Header";

const initialShortcuts = [
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

const App = () => {
  const [shortcuts, setShortcuts] = useState(initialShortcuts);
  const [shortcutSuggestions, setShortcutSuggestions] = useState(shortcuts);

  const addShortcut = (command, description) => {
    const newShortcuts = [
      ...shortcuts,
      {
        id: shortcuts.length + 1,
        command: command,
        description: description,
      },
    ];
    setShortcuts(newShortcuts);
  };

  const removeShortcut = (id) => {
    setShortcuts(shortcuts.filter((s) => s.id !== id));
  };

  const editShortcut = (id, command, description) => {
    setShortcuts(
      shortcuts.map((s) => (s.id === id ? { ...s, command, description } : s))
    );
  };

  const fieldMatch = (field, value) => {
    return value
      .toLowerCase()
      .split(" ")
      .every((v) => field.toLowerCase().includes(v));
  };

  const search = (e) => {
    setShortcutSuggestions(
      shortcuts.filter(
        (s) =>
          fieldMatch(s.command, e.target.value) ||
          fieldMatch(s.description, e.target.value)
      )
    );
  };

  return (
    <div>
      <TopNav search={search} shortcuts={shortcuts} />
      <Header />
      <AddShortcut shortcuts={shortcuts} addShortcut={addShortcut} />
      <Shortcuts
        shortcuts={shortcutSuggestions}
        removeShortcut={removeShortcut}
        editShortcut={editShortcut}
      />
    </div>
  );
};

export default App;
