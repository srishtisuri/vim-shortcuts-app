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
  };

  const onSave = () => {
    dispatch(editShortcut({ id: props.shortcut.id, command, description }));
    setIsEdit(!isEdit);
  };

  const shortcutItem = (
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

  const editShortcutItem = (
    <Card className="shortcutCard" id="editShortcutCard">
      <CardBody>
        <CardTitle tag="h4">
          <InputGroup>
            <Input
              value={command}
              onChange={() => {}}
              onKeyDown={(e) => setCommand((command + " " + e.key).trim())}
            />
            <InputGroupAddon addonType="append">
              <Button outline id="clearBtn" onClick={() => setCommand("")}>
                Clear
              </Button>
            </InputGroupAddon>
          </InputGroup>
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

  return <> {isEdit ? editShortcutItem : shortcutItem} </>;
};

export default Shortcut;
