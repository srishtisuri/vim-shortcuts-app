import React from "react";
import { Input } from "reactstrap";
import SearchIcon from "./content/search-icon.png";

const SearchBar = (props) => {
  const search = {};

  return (
    <div className="search">
      <Input placeholder="Search..." onChange={(e) => search()}></Input>
      <img href="" src={SearchIcon} alt="" />
    </div>
  );
};

export default SearchBar;
