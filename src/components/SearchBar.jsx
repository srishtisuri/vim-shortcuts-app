import React from "react";
import { Input } from "reactstrap";
import SearchIcon from "../assets/search-icon.png";
import { useDispatch } from "react-redux";
import { updateSearchText } from "../actions/searchActions";

const SearchBar = (props) => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => dispatch(updateSearchText(e.target.value));

  return (
    <div className="search">
      <Input placeholder="Search..." onChange={handleOnChange}></Input>
      <img href="" src={SearchIcon} alt="" />
    </div>
  );
};

export default SearchBar;
