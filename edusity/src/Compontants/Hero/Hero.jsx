import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'           //in this line import the darkarrow image form assets file
function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure batter education for a batter world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit natus similique nemo totam!</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="arrow" /></button> 
        </div>
    </div>
  )
}

export default Hero

// a Hero companants are used for levise the image on websit home page and add text paragraph 