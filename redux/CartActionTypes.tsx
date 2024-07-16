export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export type AddToCartActionType = {
  type: typeof ADD_TO_CART;
  data: Item;
};

export type RemoveFromCartActionType = {
  type: typeof REMOVE_FROM_CART;
  data: Item;
};


export type Item = {
  name: string;
  price: number;
  color: string;
  Image: string;
};
export type CartActionTypes = AddToCartActionType | RemoveFromCartActionType;
