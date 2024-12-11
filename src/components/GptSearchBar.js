import React from 'react'
import { PiOpenAiLogo } from "react-icons/pi";
import { useSelector } from 'react-redux';
import lang from "../utils/languageConstants";
const GptSearchBar = () => {
  const langKey = useSelector(store=>store.config.language);
  console.log(lang[langKey]);
  return (
    <div className='pt-[10%] '>
     <form action="" className=' flex  items-center px-3 rounded py-3 w-1/2 mx-auto bg-black '>
     
        <input className='w-[88%] col-span-11 text-white text-xl bg-zinc-700 px-2 py-3  outline-none' type="text" name=""
         placeholder={lang[langKey].gptSearchPlaceholder} id="" />
        <button style={{
          backgroundColor:"#e50914"
        }} className='px-4  py-3 flex items-center gap-2  text-white text-xl  '><p><PiOpenAiLogo/></p><span>{lang[langKey].search}</span></button>
    
     </form>
    </div>
  )
}

export default GptSearchBar;
