import './App.css';
import Row from './components/row/Row';
import requests from './shared/requests';
import Banner from './components/banner/Banner'
import Nav from './layouts/navbar/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLarge />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="Animations" fetchUrl={requests.fetchAnimations} />
    </div>
  );
}

export default App;
