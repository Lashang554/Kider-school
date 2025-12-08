import { Link } from 'react-router'
import ClassesSection from '../components/ClassesSection'
import Appointment from '../components/AppointmentSection'
import Testimonials from '../components/TestimonialSection'
const Classes = () => {
  return (
    <div>
       <div className="relative h-[400px] overflow-hidden">
        <img
          src="/image/carousel-1.jpg"
          alt="About Us"
          className="w-full h-full object-cover"
        />
      <div className="bg-primary py-20">
      <div className="absolute inset-0 bg-black/50 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-lobster text-white mb-4">School Classes</h1>
          <nav className="text-white">
              <ol className="flex space-x-2">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li>/</li>
                <li><Link to="/about" className="hover:underline">Pages</Link></li>
                <li>/</li>
                <li className="text-white">Classes</li>
              </ol>
            </nav>
        </div>
      </div>
      </div>
      </div>
      <ClassesSection />
      <Appointment />
      <Testimonials/>
    </div>
  )
}

export default Classes

