import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Product from './Product'

function Products({ handleClick}) {
  const [products, setProducts]=useState([])

   const kab='C:\Users\hp\Desktop\images\apple.jpg'
  useEffect(() => {
     const getAllProducts=async()=>{
      const {data}=await axios.get('http://localhost:3000/api/get-all-products')
      setProducts(data)
     }
     getAllProducts()
  },[])
  return (
    <div className="mx-3 my=4">
      <div className='row'>

{
  products.map((product, index)=>(
   <Product product={product} key={index} handleClick={handleClick}/>
  ))
}
</div>
    </div>
  )
}

export default Products