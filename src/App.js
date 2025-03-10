
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Listing from './components/Listing'
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import OrderSuccessful from './components/OrderSuccessful';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/listing' element={<Listing></Listing>}/>
      <Route path='/final' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element= { <Dashboard/> }/>
      <Route path='/orderSuccessful' element={ <OrderSuccessful />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
