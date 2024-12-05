import React from 'react'
import logo from "../assets/logo.png"
const Header = () => {
  return (
 <div className='absolute z-10 px-10 py-2 bg-gradient-to-b from-black w-full'>
  <img className='w-36' src={logo} alt="" />
 </div>
  )
}

export default Header
