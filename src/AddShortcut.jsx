import React, { useState } from "react";
import { Button, Label, Input } from "reactstrap";
import "./App.css";

const AddShortcut = (props) => {
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
          onKeyUp={(e) => setCommand((command + " " + e.key).trim())}
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
          props.addShortcut(command, description);
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
