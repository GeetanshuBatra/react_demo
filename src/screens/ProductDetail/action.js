import {ADD_TO_CART, BUY_ITEM, REMOVE_FROM_CART} from './actionTypes';

const addToCart = id => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};

const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

const buyItem = (quantity, id) => {
  return {
    type: BUY_ITEM,
    quantity: quantity,
    id: id,
  };
};

export {addToCart, removeFromCart, buyItem};
