import { getLocalData, saveData } from "../Utils/localStorageData";
import * as types from "./actionType";
const initialState = {
  products: getLocalData("products_data") || [],
};

export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_PRODUCTS_LS:
      if (getLocalData("products_data")) {
        return {
          ...oldState,
        };
      } else {
        saveData("products_data", payload);
        return {
          ...oldState,
          products: payload,
        };
      }

    case types.ADD_NEW_PRODUCT:
      let newitem = [...oldState.products, payload];
      saveData("products_data", newitem);

      return {
        ...oldState,
        products: newitem,
      };
    case types.DEL_PRODUCTS_LS:
      let afterdel = [
        ...oldState.products.filter((el) => el.title != payload.title),
      ];
      saveData("products_data", afterdel);
      return {
        ...oldState,
        products: afterdel,
      };

    default:
      return oldState;
  }
};