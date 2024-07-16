import { ADD_TO_CART, REMOVE_FROM_CART, CartActionTypes,Item } from './CartActionTypes';

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
    default:
      return state;
  }
};
