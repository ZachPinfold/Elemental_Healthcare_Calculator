import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductSlider from "./Left-items/ProductSlider";

const LeftDash = ({ elementalProducts }) => {
  console.log(elementalProducts);
  return (
    <div>
      {elementalProducts.map((product, index) => (
        <ProductSlider key={index} {...product} index={index} />
      ))}
    </div>
  );
};

const mstp = state => ({
  elementalProducts: state.elementalProducts.elementalProducts
});

export default connect(mstp, {})(LeftDash);
