import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Lokacija from './components/Loakcija';
import './App.css';
import slika from './naslovna.jpg';
import Opcenito from './components/Opcenito';
import Povijest from './components/Povijest';
import Loakcija from './components/Loakcija';
import Uclanjenje from './components/Uclanjenje';
import ColorSchemesExample from './components/ColorSchemesExample';
import Fanshop from './components/Fanshop';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">

      <div className='kontejner'>

        <div className='naslov'>
          <h1 id='naslov'>HNK Hajduk <br />Split</h1>
        </div>

        <ColorSchemesExample />

      </div>
      <br />
      <Opcenito /><br /><br />
      <Povijest /><br /><br /><br /><br /><br /><br />
      <Fanshop /><br /><br /><br /><br /><br /><br />
      <Lokacija /><br /><br /><br /><br /><br /><br />
      <Uclanjenje /><br /><br /><br /><br />
      
      <Router>
        <Routes>
          <Route path='/' element={<Footer />} ></Route>
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
