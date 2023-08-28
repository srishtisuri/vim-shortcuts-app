import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ShortcutItem from "./ShortcutItem";

const Shortcuts = () => {
  const shortcuts = useSelector((state) => state.shortcuts) || [];
  const searchText = useSelector((state) => state.searchText);

  useEffect(() => {
    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
  }, [shortcuts]);

  const fieldMatch = (field, value) =>
    value
      .toLowerCase()
      .split(" ")
      .every((v) => field.toLowerCase().includes(v));

  const shortcutsToRender =
    shortcuts &&
    shortcuts
      .filter(
        (s) =>
          fieldMatch(s.command, searchText) ||
          fieldMatch(s.description, searchText)
      )
      .map((s) => <ShortcutItem key={s.id} shortcut={s} />);

  return <div className="shortcuts">{shortcutsToRender}</div>;
};

export default Shortcuts;
