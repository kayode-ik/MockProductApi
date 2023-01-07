import React, { useState } from "react";
import "./index.css";
import SearchBar from "./SearchBar";
// import product from "./productData";
import ProductT from "./ProductTable";

const ProductMock = () => {
  const [searchText, setSerchText] = useState("");
  const [inStore, setInStore] = useState(false);

  const handleOnChange = (e) => {
    setSerchText(() => e.target.value);
  };

  const handleOnChecked = (e) => {
    setInStore(() => e.target.checked);
  };
  return (
    <div className="productMock">
      <h3>Mock Product Api</h3>
      <div className="productMock__container">
        {/* searchBar */}
        <SearchBar
          searchText={searchText}
          handleOnChange={handleOnChange}
          inStore={inStore}
          handleOnChecked={handleOnChecked}
        />
        {/* ProductTable */}
        <ProductT searchText={searchText} inStore={inStore} />
      </div>
    </div>
  );
};

export default ProductMock;
