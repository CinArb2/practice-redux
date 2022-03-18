import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const ProductCard = () => {
  const navigate = useNavigate()

  const products = useSelector(state => state.products)

  const handleClick = (id) => {
    navigate(`/Product/${id}`)
  }

  const renderedList = products.map(el => (
    <div key={el.id} className='product-card'>
      <img src={el.image} alt="" />
      <h3>{el.title}</h3>
      <span className='price'>${el.price}</span>
      <p>{el.category}</p>
      <button onClick={()=>handleClick(el.id)}>See details</button>
    </div>
  ))

  return (
    <>{renderedList}</>
  )
}

export default ProductCard;