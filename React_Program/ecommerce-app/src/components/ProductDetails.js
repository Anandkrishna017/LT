import React, { useEffect, useState, } from 'react'
import './ProductDetails.css'
import { getProductsId } from '../ApiService/api';
import { Link, useParams } from 'react-router-dom';

function ProductDetails() {
    const [products,setProducts]=useState();
    const {id}= useParams();
    
    useEffect(()=>{
        const fetchProductDetails =async()=>{
       
            const data=await getProductsId(id);
            setProducts(data)
            console.log(data)
        }
        fetchProductDetails();

    },[id])

    const handleBuyNow =()=>{
        window.alert("The product is ordered")
    }

    if (!products) {
        return <div>Loading...</div>;  
    }
    return (
        <div className='product-container'>
            
            
            <img src={products.image} alt='productImage' className='product-image'/>
            

            <div className='product-info'>
                <h1 className='product-title'>{products.title}</h1>
                <p className='product-description'>{products.description
                }</p>
                <p className='product-price'>${products.price}</p>
                <button className='buy-now-button' onClick={handleBuyNow}>Buy now</button>
                <Link to='/'>
                <button className='go-back-home'>Go Back Home</button>
                </Link>
                

            </div>

        </div>
    )
}

export default ProductDetails