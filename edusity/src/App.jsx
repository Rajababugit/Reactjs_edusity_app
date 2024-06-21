import React, { useState } from 'react'
import Navbar from './Compontants/Navbar/Navbar'
import Hero from './Compontants/Hero/Hero'
import Programs from './Compontants/Programs/Programs'
import Title from './Compontants/Title/Title'
import About from './Compontants/About/About'
import Campus from './Compontants/Campus/Campus'
import Testimonial from './Compontants/Testimonials/Testimonial'
import Contact from './Compontants/Contact/Contact'
import Footer from './Compontants/Footer/Footer'
import Videoplayer from './Compontants/Videoplayer/Videoplayer'
const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle='OUR PROGRAMS' title='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallerys' title='Campus photos'/>
      <Campus/>
      <Title subTitle='TEASTIMONIALS' title='What Students Says'/>
      <Testimonial/>
      <Title subTitle='CONTACT US' title='To Touch With Us.'/>
      <Contact/>
      <Footer/>
      </div>
      <Videoplayer playState={playState}  setPlayState={setPlayState}/>
    </div>
  )
}

export default App