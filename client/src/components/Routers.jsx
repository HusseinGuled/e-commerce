import React, { useState } from 'react'
import '../styles/header.css'
import { Route ,Routes } from 'react-router-dom'
import Header from './header'
import Carts from '../pages/Carts'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Home from '../pages/Home'

function Routers() {
  const[data, setData]=useState([])

  // console.log('first', data)
  const [warning ,setWarning]=useState(false)

  const handleClick=(items)=>{
    // console.log(item)
    let isPresent=false
  data.forEach((item)=>{
      if(item._id==items._id){
        isPresent=true
       return;
      }
    })
     if(isPresent){
      setWarning(true)
      setTimeout(()=>{
        setWarning(false) 
      }, 2000)
      return;
     }
     setData([...data, items])
    //  console.log('data ', data)
    //  console.log('itwm ', items)
    }
    
  return (
   <>
   <Header size={data.length}/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/products' element={<Products handleClick={handleClick}/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/carts' element={<Carts data={data} setData={setData} />} />
    <Route path='/login' element={<Login/>} />

   </Routes>
  {/* {
   warning && toast.error('this item is already added to your carts')
  } */}
   </>
  )
}

export default Routers