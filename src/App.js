
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Listing from './components/Listing'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/listing' element={<Listing></Listing>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
