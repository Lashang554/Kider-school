import React from 'react'
import Carousel from '../components/Carousel'
import Facilities from '../components/Facilities'
import CallToActionSection from '../components/CallToActionSection'
import ClassesSection from '../components/ClassesSection'
import Appointment from '../components/Appointment'
import Teachers from '../components/Teacher'
import Testimonials from '../components/Testimonials'
import AboutSection from '../components/AboutSection'

const Home = () => {
  return (
    <div>
      <Carousel />
      <Facilities />
      <AboutSection />
      <CallToActionSection/>
      <ClassesSection/>
      <Appointment/>
      <Teachers/>
      <Testimonials/>
    </div>
  )
}

export default Home
