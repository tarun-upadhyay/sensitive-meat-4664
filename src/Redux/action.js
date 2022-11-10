import * as types from "./actionType";

import data from "../db.json";
export const addData = (dispatch) => {
  return dispatch({ type: types.ADD_PRODUCTS_LS, payload: data.products });
};
export const addNewData = (params,id) => (dispatch) => {
  return dispatch({ type: types.ADD_NEW_PRODUCT, payload: params });
};
export const deleteData = (parms) => (dispatch) => {
  return dispatch({ type: types.DEL_PRODUCTS_LS, payload: parms });
};