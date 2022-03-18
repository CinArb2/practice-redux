import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectProduct, removeProduct } from '../Redux/fetch/prodActionCreators'
import axios from 'axios'
import {addToCart} from '../Redux/cart/cartActionCreators'

const ProductDetail = () => {
  const navegar = useNavigate()
  const product = useSelector(state => state.selectedProduct)
  
  const { id } = useParams()
  const dispatch = useDispatch()
  
  const fetchProduct = (id) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(resp => dispatch(selectProduct(resp.data)))
  }

  useEffect(() => {
    fetchProduct(id)
    return ()=>{
      dispatch(removeProduct());
    }
  }, [id])

  const goToCart = () => {navegar('/Carrito')}

  return (
    <div className='product-detail'>
      <div className='product-img'>
        <img src={product.image} alt="" />
      </div>
      <div className='product-info'>
        <div className='item-details'>
          <h1>{product.title}</h1>
          <span>${product.price}</span>
          <p>{product.category}</p>
          <p> {product.description}
          </p>
          <button className='add-cart' onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
        </div>
        <button className='btn-back' onClick={goToCart}>Ir al carrito</button>
      </div>
    </div>
  )
}

export default ProductDetail