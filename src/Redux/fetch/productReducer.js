import { SET_PRODUCTS, SELECTED_PRODUCT, REMOVED_PRODUCT } from './productsActiontypes'

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload.products
    default:
      return state
  }
}

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return { ...state, ...payload };
    case REMOVED_PRODUCT:
      return {};
    default:
      return state;
  }
};