import React from "react";
import "../index.css";
import product from "../productData";
import ProductCategory from "./ProductCatRow";
import ProductRow from "./ProductRow";
// import Table from "bootstrap";

const ProductT = ({ searchText, inStore }) => {
  const rows = [];
  let lastCategory = null;

  product.forEach((product) => {
    // console.log(product.name.indexOf(searchText), "line 13");
    // Filter the product by the entered search value
    if (product.name.indexOf(searchText) === -1) {
      return;
    }
    //Check by the checked button
    if (inStore && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategory key={product.category} rcategory={product.category} />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <>
      <div className="productTCR">
        <table className="productTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </>
  );
};

export default ProductT;
