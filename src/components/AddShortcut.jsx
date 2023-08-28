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

  const handleCmdOnKeyDown = (e) =>
    setCommand((command + " " + e.key).trim().toLowerCase());

  const handleDescOnChange = (e) => setDescription(e.target.value);

  const handleCmdClear = () => setCommand("");

  const handleDescClear = () => setDescription("");

  const handleOnClick = () => {
    dispatch(
      addShortcut({
        id: shortcuts.length + 1,
        command: command,
        description: description,
      })
    );
    setCommand("");
    setDescription("");
  };

  return (
    <div className="addShortcut">
      <div className="formElement">
        <Label>Shortcut</Label>
        <InputGroup>
          <Input value={command} onKeyDown={handleCmdOnKeyDown} />
          <InputGroupAddon addonType="append">
            <Button id="clearBtn" onClick={handleCmdClear}>
              Clear
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="formElement">
        <Label>Description</Label>
        <InputGroup>
          <Input value={description} onChange={handleDescOnChange} />
          <InputGroupAddon addonType="append">
            <Button id="clearBtn" onClick={handleDescClear}>
              Clear
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <Button className="formBtn" color="info" onClick={handleOnClick}>
        Add
      </Button>
    </div>
  );
};

export default AddShortcut;
