import React, { useEffect } from "react";
import { connect } from "react-redux";
import Product from "./Left-items/Product";
import { getElementalProducts } from "../../actions/elementalProductActions";

const LeftDash = ({ elementalProducts, getElementalProducts }) => {
  useEffect(() => {
    getElementalProducts();
  }, []);
  return (
    <div>
      {elementalProducts.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

const mstp = state => ({
  elementalProducts: state.elementalProducts.elementalProducts
});

export default connect(mstp, { getElementalProducts })(LeftDash);
