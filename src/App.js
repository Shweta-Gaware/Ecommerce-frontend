
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import ShopHomePage from './pages/ShopHomePage';    // here instead of shop page ShopHomePage used
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import men_banner from "./components/Assets/banner_mens.png"
import women_banner from "./components/Assets/banner_women.png"
import kid_banner from "./components/Assets/banner_kids.png"


function App() {
  return (
    <div className="App">
     <BrowserRouter>   
      <Navbar/>
      <Routes>
      <Route path='/' element={<ShopHomePage/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}/>
      
      <Route path="/product" element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
     
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>

        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
