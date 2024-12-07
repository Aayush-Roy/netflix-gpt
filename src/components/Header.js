import React from 'react'
import { signOut } from "firebase/auth";
import logo from "../assets/logo.png"


import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    });
    
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  },[])


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
