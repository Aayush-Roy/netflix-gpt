import React, { useState,useRef } from 'react'
import Header from "./Header";
import { checkValidData } from '../utils/validate';
function Login() {
  const[isSignIn,setIsSignIn]=useState(true);
  const[errorMessage,setErrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm= ()=>{
      setIsSignIn(!isSignIn);
  }

  const handleButtonClick= ()=>{
    console.log(email)
    console.log(password)
    const message  = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)
    console.log(message);
  }

  return (
    <div>
      <Header/>
      <div className=''>
      <img className='absolute w-full h-full' src="https://cdn-images-1.medium.com/max/1024/1*5lyavS59mazOFnb55Z6znQ.png" alt="" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} action="" className='bg-black bg-opacity-85 text-white py-10 px-8 rounded-lg absolute gap-6 w-3/12 flex flex-col my-36 mx-auto right-0 left-0'>
      <h1 className='text-3xl font-bold'>{isSignIn ? "Sign in" : "Sign up"}</h1>
      
      {!isSignIn && 
      <input type="text" className='px-2 py-2 outline-none rounded bg-zinc-800' name="" id="" placeholder='Full Name'/>
      }

        <input type="text" ref={email} className='px-2 py-2 outline-none rounded bg-zinc-800' name="" id="" placeholder='Email Address'/>
        <input type="password" ref={password} className='px-2 py-2 outline-none rounded bg-zinc-800' name="" id=""  placeholder='Password'/>
        <p className='text-red-600 text-sm'>{errorMessage}</p>
        <button 
        onClick={handleButtonClick}
        className='bg-red-700 px-10 py-2 rounded-md font-semibold'>{isSignIn ? "Sign in" : "Sign up"}</button>
        <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "New to Netflix ? Sign up" : "Allready have a Account! Sign In Now."}</p>
      </form>
    </div>
  )
}

export default Login
