import React from 'react'
import { signOut } from "firebase/auth";
import logo from "../assets/logo.png"
import { FaUserCircle } from "react-icons/fa";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(store=>store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    });
    
  }

  return (
 <div className='absolute z-10 px-10 py-2 flex justify-between bg-gradient-to-b from-black w-full'>
  <img className='w-28' src={logo} alt="" />
  { user && 
  <div className='flex items-center gap-4'>
    {/* <p><FaUserCircle/></p> */}
    <img className='w-8 rounded-full' src={user.photoURL} alt="" />
    <button onClick={handleSignOut}>Sign out</button>
  </div>
}
 </div>
  )
}

export default Header
