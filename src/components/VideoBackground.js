import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({movieId}) => {
    console.log(movieId)
    const getMovieVideos =async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
        const json = await data.json();
        console.log(json);
        const filterData = json.results.filter(video=>video.type==="Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
    }

    useEffect(()=>{
        getMovieVideos();
    },[])

  return (
    <div>
      videoBg
    </div>
  )
}

export default VideoBackground
