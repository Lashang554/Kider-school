import { Link } from 'react-router'
import AppointmentSection from '../components/AppointmentSection'

const Appointment = () => {
    return (
        <div>
            <div className="relative h-[400px] overflow-hidden">
                <img
                    src="/image/carousel-1.jpg"
                    alt="About Us"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl font-lobster text-white mb-4">Make Appointment</h1>
                        <nav className="text-white">
                            <ol className="flex space-x-2">
                                <li><Link to="/" className="hover:underline">Home</Link></li>
                                <li>/</li>
                                <li><Link to="/appointment" className="hover:underline">Pages</Link></li>
                                <li>/</li>
                                <li className="text-white">Make Appointment</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <AppointmentSection />
        </div>
    )
}

export default Appointment

