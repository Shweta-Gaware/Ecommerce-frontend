import React from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow_icon.png';
import hero_image from '../Assets/hero_image.png';
import '../Hero/Hero.css'


const Hero = () => {
  return (
    <div className='hero'>

    <div className='hero-left'>
     <h2>NEW ARRIVALS ONLY</h2>
     
     <div>
        <div className='hand-hand-icon'>
        <p>new</p>
        <img src={hand_icon} alt=' '/>
    </div>

        <p className='p1'>collections</p>
        <p className='p2'>for everyone</p>
    </div>
    <div className='hero_latest_btn'>
        <h5>Latest Collection</h5>
        <img src={arrow_icon}  style={{width:'110px', color:'white'}} alt="" />
    </div>
    </div>

    <div className='hero-right'>
    <img src={hero_image}  alt='' />
    </div>

    </div>
    
  )
}

export default Hero