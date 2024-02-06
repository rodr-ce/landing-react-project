import React from 'react'
import { albumsStock } from '../../assets/stock'
import {  ProductsWrapper } from './ProductStyles'
import { ProductCard } from './ProductCard'

const Products = () => {
  return (
    <>
      <ProductsWrapper>
        {albumsStock.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ProductsWrapper>
    </>
  )
}

export default Products
