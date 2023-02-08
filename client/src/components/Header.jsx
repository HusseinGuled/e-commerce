import React, { useState } from 'react'
import '../styles/header.css'
import {BsCartPlus} from 'react-icons/bs'

import { NavLink } from 'react-router-dom'
function Header({size}) {


  return (
    <div>
    <div className="main-bar">
         <div className="logo">
             <h1>CasriShop</h1>
         </div>
 
         <div className="menu-bars">
    
         <NavLink to='/'> Home  </NavLink>
             <NavLink to='/products'> Products  </NavLink>
             <NavLink to='/contact'>  Contact  </NavLink>
         </div>
         <div className='end-bars'>
  <NavLink to='/carts'>
    <span className='spaing'>{size}</span>
      <span>
        <BsCartPlus className='fs-2'/>
             {/* < AiOutlineShoppingCart className='fs-1'/> */}
      </span>
  </NavLink>
          
             <NavLink to='/login'>  Login  </NavLink>
             </div>
     </div>
     </div>
  )
}

export default Header