import React from "react";
import { Input } from "reactstrap";
import SearchIcon from "./content/search-icon.png";
import { useDispatch } from "react-redux";

const SearchBar = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="search">
      <Input placeholder="Search..." onChange={props.search}></Input>
      <img href="" src={SearchIcon} alt="" />
    </div>
  );
};

export default SearchBar;
