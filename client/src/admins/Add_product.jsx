import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Add_product() {
    const [products, setProduct]=useState()
 const changeHandle=(e)=>{
    setProduct({...products,[e.target.name]:e.target.value})
    console.log(products)
 }
    const submitHandle=(e)=>{
        e.preventDefault()

    }
  return (
    <div className='container'>
 
    </div>
  )
}

export default Add_product