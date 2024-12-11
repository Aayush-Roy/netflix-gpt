
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayngMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcominMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
       <Header/>
      {
        showGptSearch ? <GptSearch/> : <>
        <MainContainer/>
        <SecondaryContainer/>
        </> 
      }
     
      
      
    </div>
  )
}

export default Browse
