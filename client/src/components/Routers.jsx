import React, { useState } from 'react'
import '../styles/header.css'
import { Route ,Routes } from 'react-router-dom'
import Header from './header'
import Carts from '../pages/Carts'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Home from '../pages/Home'
import First from '../admins/First'
function Routers() {
  const[counter, setCounter]=useState(10)
  return (
   <>
   <Header counter={counter} setCounter={setCounter}/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/products' element={<Products counter={counter} setCounter={setCounter}/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/carts' element={<Carts />} />
    <Route path='/login' element={<Login/>} />
    <Route path='/admin' element={<First/>} />

   </Routes>
   </>
  )
}

export default Routers