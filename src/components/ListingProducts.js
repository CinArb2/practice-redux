import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { fetchProducts } from '../Redux/fetch/prodActionCreators'
import { useDispatch } from 'react-redux'

const ListingProducts = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <main>
      <h2>Popular products</h2>
      <div className="container-products">
          <ProductCard />
      </div>
    </main>
  )
}

export default ListingProducts