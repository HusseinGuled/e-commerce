import React, { useState } from 'react'
import '../styles/header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import { NavLink } from 'react-router-dom'
function Header({counter , setCounter}) {


  return (
    <div>
    <div className="main-bar">
         <div className="logo">
             <h1>CasriShop</h1>
         </div>
 
         <div className="menu-bars">
    
         <NavLink to='/'> Home  </NavLink>
             <NavLink to='/products'> Products  </NavLink>
             <NavLink to='/about'> About  </NavLink>
             <NavLink to='/contact'>  Contact  </NavLink>
             <NavLink to='/admin'>  Admin  </NavLink>
         </div>
         <div className='end-bars'>
  <NavLink to='/carts'>
      <span>
        {counter}
             < AiOutlineShoppingCart className='fs-3'/>
      </span>
  </NavLink>
          
             <NavLink to='/login'>  Login  </NavLink>
             </div>
     </div>
     </div>
  )
}

export default Header