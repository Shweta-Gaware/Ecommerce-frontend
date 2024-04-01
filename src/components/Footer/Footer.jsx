import React from 'react';
import "../Footer/Footer.css";
import instagram_icon from "../Assets/instagram_logo.webp";
import whatsapp_logo from "../Assets/whatsapp-logo.png";
import twitter_logo from "../Assets/twitter_logo.png";
import footer_logo from "../Assets/footer_logo.webp"


const Footer = () => {
  return (
    <div className='footer'>
     <div className='footer-logo'>
     <img   src={footer_logo} style={{width:"100px", height:"100px"}} alt=''/>
    <p>SHOPPER</p>
     </div>
     <ul className="footer-links">
      <li>Company</li>
      <li>Products</li>
      <li>Offices</li>
      <li>About</li>
      <li>Contact</li>
     </ul>
     {/* test comment */}
     <div className='footer-social-icon'>
      <div className='footer-icon-container'>
      <img src={instagram_icon} style={{width:"60px", height:"60px"}}  alt=''/>
      </div>
      <div className='footer-icon-container'>
      <img src={whatsapp_logo} style={{width:"60px", height:"60px"}} alt=''/>
      </div>
      <div className='footer-icon-container'>
      <img src={twitter_logo} style={{width:"60px", height:"60px"}}  alt=''/>
      </div>
     </div>

     <div className="footer-copyright">
        <hr/>
        <p>Copyright @2023 - All Right Reserved.</p>
     </div>
    </div>
  )
}

export default Footer