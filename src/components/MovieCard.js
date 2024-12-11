import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    // console.log(posterPath)
  return (
    <div className=' '>
      <div className='w-32 '>
        <img className='w-full ' src={IMG_CDN_URL+posterPath} alt="" />
      </div>
    </div>
  )
}

export default MovieCard
