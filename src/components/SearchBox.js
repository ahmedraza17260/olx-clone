import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        type="search"
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <SearchIcon className="go s24 cfff header__searchIcon" />
    </div>
  );
};

export default SearchBox;
