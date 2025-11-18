import { Link } from 'react-router'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-3 text-primary" />
              123 Street, New York, USA
            </p>
            <p className="mb-2 flex items-center">
              <FaPhoneAlt className="mr-3 text-primary" />
              +012 345 67890
            </p>
            <p className="mb-2 flex items-center">
              <FaEnvelope className="mr-3 text-primary" />
              info@example.com
            </p>
            <div className="flex space-x-2 pt-4">
              <a href="#" className="btn-square border border-gray-600 text-gray-400 hover:bg-primary hover:border-primary hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="btn-square border border-gray-600 text-gray-400 hover:bg-primary hover:border-primary hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="btn-square border border-gray-600 text-gray-400 hover:bg-primary hover:border-primary hover:text-white">
                <FaYoutube />
              </a>
              <a href="#" className="btn-square border border-gray-600 text-gray-400 hover:bg-primary hover:border-primary hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
              <a href="#" className="hover:text-primary transition-colors">Our Services</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms & Condition</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Photo Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <img
                  key={num}
                  src={`/image/classes-${num}.jpg`}
                  alt={`Gallery ${num}`}
                  className="w-full h-20 object-cover rounded bg-gray-700 p-1"
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 pr-24 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <button className="bg-orange-500 btn-primary absolute right-2 top-2 px-4 py-1.5 rounded text-white hover:bg-orange-600 transition ">
                SignUp
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>
                &copy; <a href="#" className="border-b border-primary">Your Site Name</a>, All Right Reserved.
              </p>
              <p className="mt-2">
                Designed By <a href="https://htmlcodex.com" className="border-b border-primary">HTML Codex</a>
                <br />
                Distributed By: <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer" className="border-b border-primary">ThemeWagon</a>
              </p>
            </div>
            <div className="flex space-x-4">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
              <a href="#" className="hover:text-primary transition-colors">Help</a>
              <a href="#" className="hover:text-primary transition-colors">FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

