import Banner from './components/banner/banner';
import FilmList from './components/FilmList/FilmList';
import NavBar from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <FilmList />
      <FilmList/>
    </div>
  );
}

export default App;
