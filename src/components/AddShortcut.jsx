import React, { useState } from "react";
import { Button, Label, Input, InputGroup, InputGroupAddon } from "reactstrap";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addShortcut } from "../actions/shortcutsActions";

const AddShortcut = (props) => {
  const dispatch = useDispatch();
  const shortcuts = useSelector((state) => state.shortcuts);
  const [command, setCommand] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="addShortcut">
      <div className="formElement">
        <Label>Shortcut</Label>
        <InputGroup>
          <Input
            value={command}
            onChange={() => {}}
            onKeyDown={(e) => setCommand((command + " " + e.key).trim())}
          />
          <InputGroupAddon addonType="append">
            <Button id="clearBtn" onClick={() => setCommand("")}>
              Clear
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="formElement">
        <Label>Description</Label>
        <InputGroup>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputGroupAddon addonType="append">
            <Button id="clearBtn" onClick={() => setDescription("")}>
              Clear
            </Button>
          </InputGroupAddon>
        </InputGroup>
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
