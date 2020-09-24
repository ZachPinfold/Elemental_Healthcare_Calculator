import { GET_ELEMENTAL_PRODUCTS } from "../actions/types";

const initialState = {
  loading: true,
  elementalProducts: [
    { name: "product_1" },
    { name: "product_2" },
    { name: "product_3" },
    { name: "product_4" }
  ],
  competitorProducts: [
    { name: "product_1", price: 3 },
    { name: "product_2", price: 1 },
    { name: "product_3", price: 0 },
    { name: "product_4", price: 3 },
    { name: "product_5", price: 3 },
    { name: "product_5", price: 0 },
    { name: "product_6", price: 3 },
    { name: "product_5", price: 3 },
    { name: "product_5", price: 0 },
    { name: "product_5", price: 3 },
    { name: "product_5", price: 3 }
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
    default:
      return state;
  }
}
