import React, { useState } from "react";
import { Button, Label, Input } from "reactstrap";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addShortcut } from "./actions/shortcutActions";

const AddShortcut = (props) => {
  const dispatch = useDispatch();
  const shortcuts = useSelector((state) => state.shortcuts);
  const [command, setCommand] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="addShortcut">
      <div className="formElement">
        <Label>Shortcut</Label>
        <Input
          type="text"
          value={command}
          onChange={() => {}}
          onKeyDown={(e) => setCommand((command + " " + e.key).trim())}
        />
      </div>
      <div className="formElement">
        <Label>Description</Label>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button
        className="formBtn"
        color="info"
        onClick={() => {
          dispatch(
            addShortcut({
              id: shortcuts.length + 1,
              command: command,
              description: description,
            })
          );
          setCommand("");
          setDescription("");
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default AddShortcut;
