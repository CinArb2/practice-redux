import { DECREMENT_PRODUCT, ADD_TO_CART } from './cartActioTypes'


const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state.find(el => el.id === action.payload.id)
        ? state.map(el => el.id === action.payload.id ? { ...el, quantity: el.quantity+1}: el)
        : [...state, {...action.payload, quantity: 1}]
    case DECREMENT_PRODUCT:
      return state.map(el => el.id === action.payload ? { ...el, quantity: el.quantity - 1 } : el)
              .filter(el => el.quantity !== 0)
    default:
      return state;
  }
}

export default cartReducer;