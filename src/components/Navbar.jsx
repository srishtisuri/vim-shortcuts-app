import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavbarText,
  NavbarToggler,
} from "reactstrap";
import SearchBar from "./SearchBar";

const TopNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">vimshortcuts</NavbarBrand>
        <SearchBar className="justify-content-end" search={props.search} />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <NavbarText>Srishti Suri</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNav;
