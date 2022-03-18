import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart, decrementProduct} from '../Redux/cart/cartActionCreators'

const Carrito = () => {
  const navegar = useNavigate()
  const backHome = () => {navegar('/')}
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  
  const renderListCart = cart.map(item => (
    <tr key={item.id}>
      <td>{item.title}</td>
      <td>${item.price}</td>
      <td>
        <button className="btn btn-minus" onClick={()=>dispatch(decrementProduct(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button className="btn btn-plus" onClick={()=>dispatch(addToCart(item))}>+</button>
      </td>
      <td>${item.price*item.quantity}</td>
    </tr>
  ))

  return (
    <div className='carrito'>
      <h2>Carrito de compras</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
          {renderListCart}
        </tbody>
      </table>
      <button className="end-purchase" onClick={backHome}>Finalizar compra</button>
    </div>
  )
}

export default Carrito
