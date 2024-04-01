import React, { useContext, useState } from 'react';
import "../Navbar/Navbar.css"
import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/logo.png"
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {

  /* here menu initialise with the shop */
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
        <img src={logo} style={{height:'150px'}} alt="" />
        <p>SHOPPER</p>
        </div>
 <ul className='nav-menu'>    
      {/*  here we have used ternary operator - if menu is shop then applies hr tag if not shop then it will be blank same for other list items */}
   <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>  
   <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
   <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none'}}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
   <li onClick={()=>{setMenu("kids")}}><Link to='/kids'  style={{textDecoration:'none'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
 </ul>
<div className='nav-login-cart'>
<Link to='/login'><button className='btn btn-info'>Login</button></Link>
<Link to='/cart'><img src={cart_icon} style={{height:'150px'}} alt=''/></Link>
<div className='nav-cart-count'>{getTotalCartItems()}</div>      
</div>
    </div>
  )
}

export default Navbar