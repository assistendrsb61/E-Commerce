import React from 'react'
import { useState,useEffect } from 'react'



const Home = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        const fetchproduct = async()=>{
            const res = await fetch(`https://fakestoreapi.com/products`);
            const data = await res.json();
            setProducts(data)
        }
        fetchproduct()
    },[])



  return (
    <div className='productsWrapper'>
      {
        products.map((product)=>(
            <div className='card' key={product.id}>
                <img src={product.image} alt='img'/>
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button className='btn'>Add to cart</button>
            </div>
        ))
      }
    </div>
  )
}

export default Home
