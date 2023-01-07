import React from "react";
import "../index.css";

const ProductCategory = ({ category }) => {
  return (
    <tr>
      <th colSpan="10">{category}</th>
    </tr>
  );
};

export default ProductCategory;
