import { ADD_TO_CART, REMOVE_FROM_CART, AddToCartActionType, RemoveFromCartActionType, Item, GetDataFromApiType, GET_DATA_FROM_API } from './CartActionTypes';

export const addToCart = (item: Item): AddToCartActionType => ({
  type: ADD_TO_CART,
  data: item,
});

export const removeFromCart = (item: Item): RemoveFromCartActionType => ({
  type: REMOVE_FROM_CART,
  data: item,
});

export const getDataFromApi = (data: Item[]): GetDataFromApiType => ({
  type: GET_DATA_FROM_API,
  payload: data,
});
