import React, {useState} from 'react'
import './cardProduct.css';

function CardProduct({product}) {
  return (
    <div className='productCard'>
        <div className="productImg">
            <img src={`img/${product.image}`}/>
        </div>
        <div className="productInfo">
            <p>{product.name}</p>
            <h3>{product.description}</h3>
            <button>SHOP NOW</button>
        </div>
    </div>
  )
}
export default CardProduct;