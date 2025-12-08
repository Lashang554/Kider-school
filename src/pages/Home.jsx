import React from 'react'
import Carousel from '../components/Carousel'
import Facilities from '../components/Facilities'
import CallToActionSection from '../components/CallToActionSection'
import ClassesSection from '../components/ClassesSection'
import AppointmentSection from '../components/AppointmentSection'
import Teachers from '../components/Teacher'
import TestimonialSection from '../components/TestimonialSection'
import AboutSection from '../components/AboutSection'

const Home = () => {
  return (
    <div>
      <Carousel />
      <Facilities />
      <AboutSection />
      <CallToActionSection/>
      <ClassesSection/>
      <AppointmentSection/>
      <Teachers/>
      <TestimonialSection/>
    </div>
  )
}

export default Home
