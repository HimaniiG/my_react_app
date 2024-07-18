import { combineReducers } from 'redux';
import { CartActionTypes, GET_DATA_FROM_API, ADD_TO_CART, REMOVE_FROM_CART, Item } from './CartActionTypes';

export type RootState = {
  cart: Item[];
  products: Item[];
};

const initialState: RootState = {
  cart: [],
  products: [],
};

const rootReducer = (state = initialState, action: CartActionTypes): RootState => {
  switch (action.type) {
    case GET_DATA_FROM_API:
      return { ...state, products: action.payload };
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.data] };
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter((item) => item.id !== action.data.id) };
    default:
      return state;
  }
};

export default rootReducer;
