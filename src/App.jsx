import React, { useState } from "react";
import "./App.css";
import AddShortcut from "./AddShortcut";
import Shortcuts from "./Shortcuts";
import TopNav from "./Navbar";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const shortcuts = useSelector((state) => state.shortcuts);
  const dispatch = useDispatch();
  const [shortcutSuggestions, setShortcutSuggestions] = useState(shortcuts);

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
      <TopNav search={search} />
      <Header />
      <AddShortcut />
      <Shortcuts />
    </div>
  );
};

export default App;
