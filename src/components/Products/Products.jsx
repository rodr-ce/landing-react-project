import React from 'react'
import { albumsStock, booksStock } from '../../assets/stock'
import { Article, Button, ProductsWrapper, ButtonConteiner } from './ProductStyles'
import { FaCartPlus } from 'react-icons/fa'

const Products = () => {
  return (
    <>
      <div>
        Productos
        <select name="que buscas" id="product-selection"></select>
      </div>
      <ProductsWrapper>
        {albumsStock.map((item) => (
          <Article key={item.id}>
            <img src={item.img} alt="imagen de album" width={200} />
            <h3>{item.album}</h3>
            <p>{item.artist}</p>
            <p className='italic'>${item.price}</p>
            <ButtonConteiner>
              <Button className='add' ><FaCartPlus /></Button>
              <Button >Comprar</Button>
            </ButtonConteiner>
          </Article>
        ))}
      </ProductsWrapper>
    </>
  )
}

export default Products
