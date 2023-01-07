import React, { useState } from "react";
import "./index.css";

const SearchBar = ({
  searchText,
  inStore,
  handleOnChange,
  handleOnChecked
}) => {
  console.log(searchText);
  console.log(inStore);

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleOnChange}
          />
          <p>
            <input type="checkbox" value={inStore} onChange={handleOnChecked} />
            {""}Only show products in stock
          </p>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
