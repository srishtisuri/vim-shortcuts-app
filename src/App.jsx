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

  const addShortcut = (command, description) => {
    setShortcuts([
      ...shortcuts,
      {
        id: shortcuts.length + 1,
        command: command,
        description: description,
      },
    ]);
  };

  const removeShortcut = (id) => {
    setShortcuts(shortcuts.filter((s) => s.id !== id));
  };

  const editShortcut = (id, command, description) => {
    setShortcuts(
      shortcuts.map((s) => (s.id === id ? { ...s, command, description } : s))
    );
  };

  return (
    <div>
      <TopNav shortcuts={shortcuts} />
      <Header />
      <AddShortcut shortcuts={shortcuts} addShortcut={addShortcut} />
      <Shortcuts
        shortcuts={shortcuts}
        removeShortcut={removeShortcut}
        editShortcut={editShortcut}
      />
    </div>
  );
};

export default App;
