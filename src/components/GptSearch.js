import React from 'react'
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from '../utils/constants';
const GptSearch = () => {
  return (
    <div className=''>
      <div className='absolute w-full h-full -z-10'>
      <img className=' w-full h-full' src={BG_URL} alt="" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
