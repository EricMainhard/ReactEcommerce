import React, { useEffect, useState } from 'react'
import {data} from '../../data';
import './productsContainer.css';
import CardProduct from '../CardProduct/CardProduct';

function ProductsContainer() {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        setProducts(data.products)
    },[data])

  return (
    <section className='productsContainer'>
        {products.map(product => {
            return (
            <CardProduct product={product}/>
            )
        })}
    </section>
  )
}

export default ProductsContainer