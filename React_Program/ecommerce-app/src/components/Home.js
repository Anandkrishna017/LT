import React, { useEffect, useState } from 'react'
import './Home.css'
import { getAllProducts } from '../ApiService/api.js';
import { Link } from 'react-router-dom'

function Home() {
     const [products,setProducts]=useState([]);

     const fetchProducts=async()=>{
        const data =await getAllProducts();
        console.log(data);
        setProducts(data)
    }
     useEffect(()=>{
        
    fetchProducts()
     },[])

  return (
    <div className='product-grid'>
        {
            products.map((product)=>(
                <div className='product' key={product.id}>
                <img src={product.image} alt="alt"/>
                <h2>{product.title}</h2>
                <p>
                    <span className='price'>${product.price}</span>
                </p>
                <Link to={`/product/${product.id}`}>
                <button>Product details</button>
                </Link>
                
            </div>
            ))
        }
        
    </div>
  )
}

export default Home