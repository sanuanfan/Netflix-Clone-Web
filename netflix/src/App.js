import Banner from './components/banner/banner';
import FilmList from './components/FilmList/FilmList';
import NavBar from './components/navbar/navbar';
import {popularurl,trendingurl,comedyurl,actionurl,horrorurl,romanceurl} from '../src/constant'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <FilmList title = 'Trending' url={trendingurl}/>

      <FilmList title = 'Action' url={actionurl}/>
      <FilmList  title = 'Popular on Netflix' url={popularurl}/>
      <FilmList title = 'Romance' url={romanceurl}/>
      <FilmList title = 'Comedy' url={comedyurl}/>
      <FilmList title = 'Horror' url={horrorurl} />
    </div>
  );
}

export default App;
