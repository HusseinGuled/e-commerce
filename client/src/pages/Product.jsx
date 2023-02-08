import React from 'react'
import '../styles/product.css'
function Product({product , handleClick}) {

  const im='D:\NodejsProjects\e-commerce\images\apple.jpg'
  return (
<div className='col-3 my-2 '>
      <div className="card" style={{ width: '18rem' , height: '18rem'}}>
        <div className="card-title"></div>
        <div className="card-body">
        <img 
        style={{ objectFit: "fill" }}
					height={130}
					width={180} 
          src={product.image} alt=""/>

        </div>
       <div className="container d-flex justify-content-around">
       <h6>{product.itemName}</h6>
       <h6>${product.price}</h6>
       </div>
        <div className="container  ml-4 my-2">
        <button className=' add-btn' onClick={()=>handleClick(product)}>Add Carts</button>
        </div>
      </div>
    </div>
  )
}

export default Product