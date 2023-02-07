import React from 'react'

function Product({product , counter , setCounter}) {

  const im='D:\NodejsProjects\e-commerce\images\apple.jpg'
  return (
<div className='col-3 my-2'>
      <div className="card" style={{ width: '20rem' , height: '20rem'}}>
        <div className="card-title"></div>
        <div className="card-body">
        <img 
        style={{ objectFit: "fill" }}
					height={180}
					width={250} 
          src={product.image} alt=""/>

        </div>
       <div className="container d-flex justify-content-around">
       <span>{product.itemName}</span>
       <span>${product.price}</span>
       </div>
        <div className="container  ml-4 my-2">
        <button className='btn btn-primary' onClick={setCounter(counter+1)}>Add to Carts</button>
        </div>
      </div>
    </div>
  )
}

export default Product