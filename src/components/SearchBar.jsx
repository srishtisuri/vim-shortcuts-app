import React from "react";
import { Input } from "reactstrap";
import SearchIcon from "../content/search-icon.png";
import { useDispatch } from "react-redux";
import { updateSearchText } from "../actions/searchActions";

const SearchBar = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="search">
      <Input
        placeholder="Search..."
        onChange={(e) => dispatch(updateSearchText(e.target.value))}
      ></Input>
      <img href="" src={SearchIcon} alt="" />
    </div>
  );
};

export default SearchBar;
