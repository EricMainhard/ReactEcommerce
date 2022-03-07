import React, { useEffect, useState } from 'react'
import './productsContainer.css';
import Loader from '../Loader/Loader';
import CardProduct from '../CardProduct/CardProduct';
import MessageBox from '../MessageBox/MessageBox';
import axios from 'axios';

function ProductsContainer() {

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    useEffect(()=>{
      const fetchProducts = async () => {
        try{
          setLoading(true);
          const {data} = await axios.get('http://localhost:5000/api/products');
          setLoading(false);
          setProducts(data);
          }catch(e){
            setError('An error has occured');
          }
      }
        fetchProducts()
    },[])

  return (
    <section className='productsContainer'>
        {loading ? 
          <Loader/> :
        error ?
          <MessageBox>
            {error}
          </MessageBox> :
        products.map(product => {
            return (
            <CardProduct product={product}/>
            )
        })}
    </section>
  )
}

export default ProductsContainer