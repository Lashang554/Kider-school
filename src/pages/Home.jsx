import React from 'react'
import Carousel from '../components/Carousel'
import Facilities from '../components/Facilities'
import About from '../components/About'
import CallToActionSection from '../components/CallToActionSection'

const Home = () => {
  return (
    <div>
      <Carousel />
      <Facilities />
      <About />
      <CallToActionSection/>
    </div>
  )
}

export default Home
