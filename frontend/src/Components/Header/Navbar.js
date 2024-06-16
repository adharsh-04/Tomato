import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='shadow-sm text-white' style={{backgroundColor:"#0C1844"}} id='main'>
        <div className='d-flex justify-content-between align-items-center pt-2'>
            <div className='d-flex'>
                <img src='https://img.freepik.com/free-psd/tomato-fruit-isolated-transparent-background_191095-15476.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718236800&semt=sph' className='rounded-2' alt='' id='image'/>
                <h3 className='text-white mt-2 mx-2' style={{fontFamily:"fantasy"}}>Tomato</h3>
            </div>
            <div className='d-flex justify-content-end'>
                 <NavLink style={{textDecoration:"none"}} className=' me-3 cursor-pointer   fs-5 text-white nav-link-hover'  to='signin' >Login</NavLink>
                 <NavLink style={{textDecoration:"none"}} className='me-3 cursor-pointer fs-5 text-white'  id='li' to=''>Cart</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar