import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies.nowPlayingMovies);
  console.log(movies)
  return (
    <div>
   
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
   
    </div>
  )
}

export default SecondaryContainer
