import { SET_CONTEXT, ADD_CONTEXT, REMOVE_CONTEXT } from "./constants";

export const setContext = (payload) => {
  return {
    type: SET_CONTEXT,
    payload,
  };
};
export const addContext = (payload) => {
  return {
    type: ADD_CONTEXT,
    payload,
  };
};
export const removeContext = (payload) => {
  return {
    type: REMOVE_CONTEXT,
    payload,
  };
};
