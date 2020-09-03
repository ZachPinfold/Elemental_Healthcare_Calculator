import { GET_ELEMENTAL_PRODUCTS } from "../actions/types";

const initialState = {
  loading: true,
  elementalProducts: []
};

export default function (state = initialState, action) {
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
