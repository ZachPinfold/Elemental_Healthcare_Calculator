import { GET_ELEMENTAL_PRODUCTS, UPDATE_GRAPH } from "./types";

export const slideChange = (num, name) => dispatch => {
  dispatch({ type: UPDATE_GRAPH, payload: { num, name } });
};
