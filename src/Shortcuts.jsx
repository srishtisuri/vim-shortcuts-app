import React from "react";
import Shortcut from "./Shortcut";

const Shortcuts = (props) => {
  // const colors = [
  //   "#6c757d",
  //   "#007bff",
  //   "#28a745",
  //   "#17a2b8",
  //   "#ffc107",
  //   "#dc3545 ",
  // ];

  // color={colors[Math.floor(Math.random() * colors.length)]}

  const shortcuts = props.shortcuts.map((s) => (
    <Shortcut
      key={s.id}
      shortcut={s}
      removeShortcut={props.removeShortcut}
      editShortcut={props.editShortcut}
    />
  ));
  return <div className="shortcuts">{shortcuts}</div>;
};

export default Shortcuts;
