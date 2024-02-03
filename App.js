import './components/style.css'
import Head from './components/Head';
import background from "./img/background1.JPG";
import Home from './components/Home';
import About from './components/About';
import GamesTypes from './components/GamesTypes';
import BestGames from './components/BestGames';
import Contact from './components/Contact';

function App() {
  return (

    <div className="App" style={{ backgroundImage: `url(${background})`}}>
      <Head/>
      <Home/>
      <About/>
      <GamesTypes/>
      <BestGames/>
      <Contact/>
    </div>

  );
}

export default App;
