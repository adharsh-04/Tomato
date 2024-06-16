import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className=' text-white py-4 shadow-sm' style={{fontFamily:"sans-serif", backgroundColor:"#0C1844"}}>
      <div className='d-flex justify-content-evenly align-items-center'>
        <div className='flex-item'>
          <ul style={{listStyleType:"none"}}>
        <li><h5>Quick links</h5></li>
          <li><NavLink style={{textDecoration:"none",color:"white"}} to=''>Home</NavLink></li>
          <li><NavLink style={{textDecoration:"none" ,color:"white"}} to='signup'>Register </NavLink></li>
          <li><NavLink style={{textDecoration:"none", color:"white"}} to='signin'>Login</NavLink></li>
          </ul>
          
        </div>
        <div className='flex-item'>
          <ul style={{listStyleType:"none"}}>
          <li>Address</li>
          <li>KPHB</li>
          <li>Contact</li>
          <li>XXXXXXXX</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer