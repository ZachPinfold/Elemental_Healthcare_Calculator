import { GET_ELEMENTAL_PRODUCTS } from "./types";

import { API, graphqlOperation } from "aws-amplify";
import { listElementalProducts } from "../graphql/queries";

export const getElementalProducts = () => async dispatch => {
  const result = await API.graphql(graphqlOperation(listElementalProducts));
  const { items } = result.data.listElementalProducts;
  dispatch({ type: GET_ELEMENTAL_PRODUCTS, payload: items });
};
