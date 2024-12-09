import React from 'react'
import MovieCard from './MovieCard'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MovieList = ({title,movies}) => {
    // console.log(movies && movies[0].poster_path)
   
  return (
    <div className='p-4 bg-black'>
         <h1 className='text-3xl text-zinc-300 font-bold my-4'>{title}</h1>
        <div className=''>
       
            <div className='flex gap-3 overflow-x-scroll'>
              
                {movies && movies.map(movie=><MovieCard posterPath={movie && movie.poster_path} />)}
            
              

            
            </div>
        </div>
      
    </div>
  )
}

export default MovieList
