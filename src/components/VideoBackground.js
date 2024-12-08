import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideos?.key);
  useMovieTrailer(movieId);

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1&si=7YGppLoaMGVKJrXH`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
