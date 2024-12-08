import React from 'react'
import { FaPlay } from "react-icons/fa";
import { TfiInfoAlt } from "react-icons/tfi";
const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] aspect-video px-24 absolute text-white bg-gradient-to-t from-black'>
      <h1 className='text-5xl font-bold'>{title && title}</h1>
      <p className='w-1/3 my-6 '>{overview && overview}</p>
      <div className='flex items-center gap-2'>
        <button className='flex items-center gap-3 rounded px-3 py-2 font-bold bg-zinc-100 text-black hover:bg-opacity-70'><span><FaPlay/> </span><p>PlayMore</p></button>
        <button className='px-8 py-2 flex bg-zinc-500 opacity-80 rounded-md font-bold items-center gap-3 hover:bg-opacity-70'><span className='text-xl'><TfiInfoAlt/></span><p>Info</p></button>
      </div>
    </div>
  )
}

export default VideoTitle
