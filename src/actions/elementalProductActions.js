import {
  GET_ELEMENTAL_PRODUCTS,
  UPDATE_GRAPH,
  UPDATE_COMPETITOR
} from "./types";

export const slideChange = (num, name, index) => dispatch => {
  dispatch({ type: UPDATE_GRAPH, payload: { num, name, index } });
};

export const updateCompetitor = compName => dispatch => {
  dispatch({ type: UPDATE_COMPETITOR, payload: compName });
};
