import {combineReducers} from 'redux'
import cartReducer from './cart/cartReducer';
import {productReducer, selectedProductsReducer} from './fetch/productReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  selectedProduct: selectedProductsReducer
})

export default rootReducer;