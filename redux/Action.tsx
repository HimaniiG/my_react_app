import { ADD_TO_CART, REMOVE_FROM_CART, AddToCartActionType, RemoveFromCartActionType, Item } from './CartActionTypes';

export const addToCart = (item: Item): AddToCartActionType => ({
  type: ADD_TO_CART,
  data: item,
});

export const removeFromCart = (item: Item): RemoveFromCartActionType => ({
  type: REMOVE_FROM_CART,
  data: item,
});
