import React, { useState } from "react";
import {
  Card,
  DropdownItem,
  Button,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { removeShortcut, editShortcut } from "../actions/shortcutsActions";

const Shortcut = ({ shortcut }) => {
  const dispatch = useDispatch();
  const [command, setCommand] = useState(shortcut.command);
  const [description, setDescription] = useState(shortcut.description);
  const [isEdit, setIsEdit] = useState(false);

  const handleOnRemove = () => {
    dispatch(removeShortcut(shortcut.id));
  };

  const handleCmdOnClear = () => setCommand("");

  const handleDescOnChange = (e) => setDescription(e.target.value);

  const handleOnKeyDown = (e) =>
    setCommand((command + " " + e.key).trim().toLowerCase());

  const handleOnEdit = () => setIsEdit(!isEdit);

  const handleOnSave = () => {
    const payload = {
      id: shortcut.id,
      command: command.toLowerCase(),
      description,
    };
    if (command && description) {
      dispatch(editShortcut(payload));
      setIsEdit(!isEdit);
    } else {
      alert("Please enter a shortcut and description");
    }
  };

  const shortcutItem = (
    <Card className="shortcutCard">
      <CardBody>
        <CardTitle tag="h4">
          {command}
          <button className="close" onClick={handleOnRemove} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </CardTitle>
        <DropdownItem divider />
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter id="cardFooter">
        <Button
          outline
          color="info"
          className="footerBtn"
          id="editBtn"
          onClick={handleOnEdit}
        >
          Edit
        </Button>
      </CardFooter>
    </Card>
  );

  const editShortcutItem = (
    <Card className="shortcutCard" id="editShortcutCard">
      <CardBody>
        <CardTitle tag="h4">
          <InputGroup>
            <Input value={command} onKeyDown={handleOnKeyDown} />
            <InputGroupAddon addonType="append">
              <Button outline id="clearBtn" onClick={handleCmdOnClear}>
                Clear
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </CardTitle>
        <DropdownItem divider />
        <Input value={description} onChange={handleDescOnChange}></Input>
      </CardBody>
      <CardFooter id="editCardFooter">
        <Button
          outline
          color="secondary"
          className="footerBtn"
          id="saveBtn"
          onClick={handleOnSave}
        >
          Save
        </Button>
      </CardFooter>
    </Card>
  );

  return <> {isEdit ? editShortcutItem : shortcutItem} </>;
};

export default Shortcut;
