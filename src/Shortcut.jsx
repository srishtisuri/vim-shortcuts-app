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
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addShortcut,
  editShortcut,
  removeShortcut,
} from "./actions/shortcutActions";

const Shortcut = (props) => {
  const dispatch = useDispatch();
  const [command, setCommand] = useState(props.shortcut.command);
  const [description, setDescription] = useState(props.shortcut.description);
  const [isEdit, setIsEdit] = useState(false);

  const onRemove = () => {
    dispatch(removeShortcut(props.shortcut.id));
  };

  const onEdit = () => {
    setIsEdit(!isEdit);
    // setCommand("");
  };

  const onSave = () => {
    dispatch({
      type: "EDIT_SHORTCUT",
      payload: {
        id: props.shortcut.id,
        command: command,
        description: description,
      },
    });
    setIsEdit(!isEdit);
  };

  const shortcut = (
    <Card className="shortcutCard">
      <CardBody>
        <CardTitle tag="h4">
          {command}
          <button className="close" onClick={onRemove} aria-label="Close">
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
          onClick={onEdit}
        >
          {" "}
          Edit
        </Button>
      </CardFooter>
    </Card>
  );

  const editShortcut = (
    <Card className="shortcutCard" id="editShortcutCard">
      <CardBody>
        <CardTitle tag="h4">
          <Input
            value={command}
            onChange={() => {}}
            onKeyDown={(e) => setCommand((command + " " + e.key).trim())}
          ></Input>
        </CardTitle>
        <DropdownItem divider />
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Input>
      </CardBody>
      <CardFooter id="editCardFooter">
        <Button
          outline
          color="secondary"
          className="footerBtn"
          id="saveBtn"
          onClick={onSave}
        >
          Save
        </Button>
      </CardFooter>
    </Card>
  );

  return <> {isEdit ? editShortcut : shortcut} </>;
};

export default Shortcut;
