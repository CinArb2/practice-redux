import { DECREMENT_PRODUCT, ADD_TO_CART } from './cartActioTypes'


export const decrementProduct = (id) => {
  return {
    type: DECREMENT_PRODUCT,
    payload: id
  }
}

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

