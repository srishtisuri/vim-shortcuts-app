import React from "react";
import { useSelector } from "react-redux";
import Shortcut from "./Shortcut";

const Shortcuts = () => {
  const shortcuts = useSelector((state) => state.shortcut);
  const shortcutsToRender = [
    ...shortcuts.map((s) => <Shortcut key={s.id} shortcut={s} />),
  ];
  return <div className="shortcuts">{shortcutsToRender}</div>;
};

export default Shortcuts;
