import {Products} from '../util/items';
import {ADD_TO_CART, REMOVE_FROM_CART, BUY_ITEM} from './actionTypes';

export const initialItems = {
  products: Products,
};

const productsReducer = (state = initialItems, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedArray = state.products.map(item => {
        if (item.id === action.payload) {
          return {...item, inCart: true};
        } else {
          return item;
        }
      });
      return {
        ...state,
        products: updatedArray,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.map(item => {
          if (item.id === action.payload) {
            return {...item, inCart: false};
          } else {
            return item;
          }
        }),
      };
    case BUY_ITEM:
      return {
        ...state,
        products: state.products.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: item.quantity - action.quantity,
              inCart: false,
            };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};

export default productsReducer;
