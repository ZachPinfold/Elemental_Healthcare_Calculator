import { GET_ELEMENTAL_PRODUCTS, UPDATE_GRAPH } from "../actions/types";

const initialState = {
  loading: true,
  elementalProducts: [
    { name: "elemental_product_1", price: 0 },
    { name: "elemental_product_2", price: 0 },
    { name: "elemental_product_3", price: 0 },
    { name: "elemental_product_4", price: 0 }
  ],
  products: [
    { name: "elemental_product_1", quantity: 0 },
    { name: "competitor_product_1", quantity: 0 },
    { name: "product_3", quantity: 0 },
    { name: "elemental_product_2", quantity: 0 },
    { name: "competitor_product_2", quantity: 0 },
    { name: "product_5", quantity: 0 },
    { name: "elemental_product_3", quantity: 0 },
    { name: "competitor_product_3", quantity: 0 },
    { name: "product_5", quantity: 0 },
    { name: "elemental_product_4", quantity: 0 },
    { name: "competitor_product_4", quantity: 0 }
  ]
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ELEMENTAL_PRODUCTS:
      return {
        ...state,
        loading: false,
        elementalProducts: payload
      };
    case UPDATE_GRAPH:
      const num = payload.name.substr(payload.name.length - 1);
      return {
        ...state,
        products: state.products.map(product =>
          product.name === payload.name
            ? { ...product, quantity: payload.num }
            : product.name === `competitor_product_${num}`
            ? { ...product, quantity: payload.num }
            : product
        )
      };
    default:
      return state;
  }
}
