import React from 'react'
import deliveryImg from '../images/delivery.png'
import clock from '../images/clock.jfif'
function Home() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-8" >
       <div className="m-4">
       <h4>Casri Online Shopping</h4>
      <h5>Adeego meel walboo aad dunida ka joogtid</h5>       
       </div>
       </div>
        <div className="col-4 ">
 <img src={deliveryImg}alt="deliveryImage" height={300} width='100%'/>
 <img src={clock} alt="clockImage" />
        </div>
      </div>
      <div className="categories">

     <h4>Electronics</h4>
      </div>
    </div>
  )
}

export default Home