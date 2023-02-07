import React, { useState } from 'react'
import MyModel from './MyModel'

 function First() {
    const [show, setShow] = useState(false);

  return (
    <div>
        <h1>No items Provided</h1>
        <button className='btn btn-success' onClick={()=>setShow(!show)}>Add new Product </button>
      <MyModel setShow={setShow} show={show}/>
    </div>
  )
}

export default First