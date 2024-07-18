// reducer.ts
import { ADD_TO_CART, REMOVE_FROM_CART, GET_DATA_FROM_API, CartActionTypes, Item } from './CartActionTypes';

const initialState: Item[] = [];

export const reducer = (state = initialState, action: CartActionTypes): Item[] => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        action.data
      ];

    case REMOVE_FROM_CART:
      return state.filter(item => item.name !== action.data.name);

    case GET_DATA_FROM_API:
      return [
        ...state,
        ...action.payload.map(product => ({
          name: product.title,
          price: product.price,
          color: product.category, 
          Image: product.image
        }))
      ];

    default:
      return state;
  }
};
