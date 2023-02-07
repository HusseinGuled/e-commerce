import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
const init ={
    price:0,
    itemName:'',
    image:'',
    desc:''
}
function MyModel({show , setShow}) {
    const[product , setProduct] = useState(init)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {price, itemName, desc, image}=product
  const submitHandle =async (e)=>{
    e.preventDefault();

    try{
      const {data}= await axios.post('http://localhost:3000/api/save-product', product)
      setShow(!show)
      setProduct(init)
      toast.success('successfully saved')
    }
    catch(err){
        console.log(err)
    }
    
  }
  const handleChange = (e)=>{
    setProduct({...product , [e.target.name]:e.target.value})
  }

  return (
    <>
   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className='' onSubmit={submitHandle}>
    <div className='my-3'>
    <label htmlFor="">Item Name</label>
    <input type="text"  placeholder='Item Name' className='form-control  p-3'
      name='itemName'
      value={itemName}
      onChange={handleChange}
    />
    </div>
    <div className='my-3'>
    <label htmlFor="">Item Description</label>

   <textarea    onChange={handleChange}  placeholder='Enter Description ' 
   className='form-control  p-3'
   name='desc'
   value={desc}
   >

   </textarea>

    </div>
    <div className='my-3'>
    <label htmlFor="">Price</label>
    <input type="number"   className='form-control  p-3'
      name='price'
      value={price}
      onChange={handleChange}
    />
    </div>
    <div className='my-3'>
    <label htmlFor="">Item Image</label>
    <input type="text"   className='form-control  p-3'
      name='image'
      value={image}
      onChange={handleChange}
    />
    </div>
      <button type='submit' className='btn btn-success form-control '>Add</button>
      </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModel