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

const Shortcut = (props) => {
  const [command, setCommand] = useState(props.shortcut.command);
  const [description, setDescription] = useState(props.shortcut.description);
  const [isEdit, setIsEdit] = useState(false);

  const onRemove = () => {
    props.removeShortcut(props.shortcut.id);
  };

  const onEdit = () => {
    setIsEdit(!isEdit);
    setCommand("");
  };

  const onSave = () => {
    props.editShortcut(props.shortcut.id, command, description);
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
            onKeyUp={(e) => setCommand((command + " " + e.key).trim())}
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
