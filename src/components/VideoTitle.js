import React from 'react'
import { FaPlay } from "react-icons/fa";
import { TfiInfoAlt } from "react-icons/tfi";
const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 w-1/2 px-16'>
      <h1 className='text-4xl font-bold'>{title && title}</h1>
      <p>{overview && overview}</p>
      <div className='flex items-center gap-2'>
        <button className='flex items-center gap-3 rounded text-white px-3 py-2 bg-red-500'><span><FaPlay/> </span><p>PlayMore</p></button>
        <button className='px-8 py-2 flex bg-zinc-400 rounded-md items-center gap-3'><span><TfiInfoAlt/></span><p>Info</p></button>
      </div>
    </div>
  )
}

export default VideoTitle
