import React from 'react'
import Navbar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Root() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root