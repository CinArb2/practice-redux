import { SET_PRODUCTS, SELECTED_PRODUCT, REMOVED_PRODUCT } from './productsActiontypes'
import axios from 'axios'

export const fetchProducts = () => {
  
  return async (dispatch) => {
    const response = await axios.get('https://fakestoreapi.com/products')
    dispatch(setProducts(response.data))
  }
}


export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      products,
    }
  }
}

export const selectProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product
  }
}

export const removeProduct = () => {
  return {
    type: REMOVED_PRODUCT,
  }
}

