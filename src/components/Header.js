import React from 'react'
import { signOut } from "firebase/auth";
import logo from "../assets/logo.png"
import { SiOpenai } from "react-icons/si";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SiNetflix } from "react-icons/si";
import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from '../utils/gptSearchSlice';
import SelectSmall from './LangSelector';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  console.log(showGptSearch);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    });
    
  }

  useEffect(()=>{
    const unsubscribe  = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); // unsubscribe on unmount
  },[])


  const handleGptSearchClick =()=>{
    dispatch(toggleGptSearchView());
  }

  return (
 <div className='absolute z-10 px-10 py-4 items-center flex justify-between bg-gradient-to-b from-black w-full'>
  <img className='w-28' src={logo} alt="" />
  { user && 
  <div className='flex items-center gap-4'>
    {/* <p><FaUserCircle/></p> */}
    {
      showGptSearch &&  <p className='text-sm text-white'><SelectSmall/></p>
    }
   
    <button
    onClick={handleGptSearchClick}
    className='px-4 flex items-center gap-2 rounded-lg py-1  bg-purple-700 text-white font-semibold'><p className='text-xl'>{showGptSearch ?<SiNetflix/> : <SiOpenai/>}</p><p>{showGptSearch?"Browse":"ShowGPT"}</p></button>
    
    <button onClick={handleSignOut} className='bg-white flex items-center px-1 gap-2 py-[3px] justify-between rounded-full font-semibold'><img className='w-8 rounded-full' src={user.photoURL} alt="" /> <p className='text-xl'><FaSignOutAlt/></p></button> 
  </div>
}
 </div>
  )
}

export default Header
