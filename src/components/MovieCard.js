import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    // console.log(posterPath)
  return (
    <div className=' bg-red-400'>
      <div className='w-36 '>
        <img className='w-full ' src={IMG_CDN_URL+posterPath} alt="" />
      </div>
    </div>
  )
}

export default MovieCard