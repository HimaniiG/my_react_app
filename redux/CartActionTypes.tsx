export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const GET_DATA_FROM_API = 'GET_DATA_FROM_API';

export type AddToCartActionType = {
  type: typeof ADD_TO_CART;
  data: Item;
};

export type RemoveFromCartActionType = {
  type: typeof REMOVE_FROM_CART;
  data: Item;
};

export type GetDataFromApiType = {
  type: typeof GET_DATA_FROM_API;
  payload: Item[];
};

export type Item = {
  id: number;
  name: string;
  price: number;
  color: string;
  Image: string;
};

export type CartActionTypes = AddToCartActionType | RemoveFromCartActionType | GetDataFromApiType;
