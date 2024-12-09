import React from 'react'
import MovieCard from './MovieCard'// requires a loader

const MovieList = ({title,movies}) => {
    // console.log(movies && movies[0].poster_path)
   
  return (
    <div className='p-4'>
         <h1 className='text-2xl text-zinc-300 font-bold my-4'>{title}</h1>
        <div className=''>
       
            <div className='flex gap-3 overflow-x-scroll'>
                {movies && movies.map(movie=><MovieCard posterPath={movie && movie.poster_path} />)}
            </div>
        </div>
      
    </div>
  )
}

export default MovieList
