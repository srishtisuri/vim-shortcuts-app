import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import SearchBar from "./SearchBar";

const TopNav = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">vimshortcuts</NavbarBrand>
        <SearchBar className="justify-content-end" search={props.search} />
      </Navbar>
    </div>
  );
};

export default TopNav;
