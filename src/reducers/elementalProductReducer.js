import {
  GET_ELEMENTAL_PRODUCTS,
  UPDATE_GRAPH,
  UPDATE_COMPETITOR
} from "../actions/types";

const initialState = {
  loading: true,
  elementalProducts: [
    { name: "elemental_product_1" },
    { name: "elemental_product_2" },
    { name: "elemental_product_3" },
    { name: "elemental_product_4" }
  ],
  elementalCompetitors: [
    {
      name: "Microline",
      products: [
        { name: "competitor_product_1", price: 1 },
        { name: "competitor_product_2", price: 1 },
        { name: "competitor_product_3", price: 1 },
        { name: "competitor_product_4", price: 1 }
      ]
    },
    {
      name: "Applied Medical",
      products: [
        { name: "competitor_product_1", price: 1 },
        { name: "competitor_product_2", price: 1 },
        { name: "competitor_product_3", price: 1 },
        { name: "competitor_product_4", price: 1 }
      ]
    },
    {
      name: "Purple Surgical",
      products: [
        { name: "competitor_product_1", price: 1 },
        { name: "competitor_product_2", price: 1 },
        { name: "competitor_product_3", price: 1 },
        { name: "competitor_product_4", price: 1 }
      ]
    },
    {
      name: "Ethicon",
      products: [
        { name: "competitor_product_1", price: 1 },
        { name: "competitor_product_2", price: 1 },
        { name: "competitor_product_3", price: 1 },
        { name: "competitor_product_4", price: 1 }
      ]
    }
  ],
  products: [
    {
      name: "elemental_product_1",
      quantity: 0,
      price: 1.99
    },
    {
      name: "competitor_product_2",
      competitor: "Microline",
      quantity: 0,
      price: 3.99
    },
    { name: "product_3", quantity: 0 },
    { name: "elemental_product_2", quantity: 0, price: 1.99 },
    { name: "competitor_product_2", quantity: 0, price: 2.99 },
    { name: "product_5", quantity: 0 },
    { name: "elemental_product_3", quantity: 0, price: 1.99 },
    { name: "competitor_product_3", quantity: 0, price: 3.99 },
    { name: "product_5", quantity: 0 },
    { name: "elemental_product_4", quantity: 0, price: 1.99 },
    { name: "competitor_product_4", quantity: 0, price: 5.99 }
  ],
  price: { prices: null }
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
            ? {
                ...product,
                quantity: payload.num * product.price
              }
            : product.name === `competitor_product_${num}`
            ? { ...product, quantity: payload.num * product.price }
            : product
        )
      };
    case UPDATE_COMPETITOR:
      return {
        ...state,
        products: state.elementalCompetitors.map(p =>
          p.products.map(p2 =>
            state.products.map(p3 =>
              p2.name === p3.name && p3.competitor === p.name
                ? (p3.price = "h")
                : null
            )
          )
        )
      };
    default:
      return state;
  }
}
