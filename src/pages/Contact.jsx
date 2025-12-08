import { useState } from 'react'
import { Link } from 'react-router'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      {/* HERO SECTION */}
     <div className="relative h-[400px] overflow-hidden">
        <img
          src="/image/carousel-1.jpg"
          alt="About Us"
          className="w-full h-full object-cover"
        />
      <div className="bg-primary py-20">
      <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-lobster text-white mb-4">
              About Us
            </h1>

            {/* Breadcrumbs */}
            <nav className="text-white">
              <ol className="flex space-x-2 text-lg font-medium">
                <li>
                  <Link to="/" className="hover:text-orange-400">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-orange-400">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      </div>


      {/* TITLE + ICONS SECTION */}
      <section className="container mx-auto px-4 mt-20">
        
        {/* TITLE */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-5xl font-lobster mb-4">Get In Touch</h1>
          <p className="text-gray-600 text-lg">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem
            kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>

        {/* ICONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-12 mb-12">

  <div>
    <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
         style={{ backgroundColor: "rgba(255, 97, 56, 0.1)" }}>
      <FaMapMarkerAlt className="text-[28px]" style={{ color: "#FF6138" }} />
    </div>
    <p className="font-semibold text-lg text-[#113946]">123 Street, New York, USA</p>
  </div>

  <div>
    <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
         style={{ backgroundColor: "rgba(255, 97, 56, 0.1)" }}>
      <FaEnvelope className="text-[28px]" style={{ color: "#FF6138" }} />
    </div>
    <p className="font-semibold text-lg text-[#113946]">info@example.com</p>
  </div>

  <div>
    <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
         style={{ backgroundColor: "rgba(255, 97, 56, 0.1)" }}>
      <FaPhoneAlt className="text-[28px]" style={{ color: "#FF6138" }} />
    </div>
    <p className="font-semibold text-lg text-[#113946]">+012 345 6789</p>
  </div>

</div>

      </section>


      {/* CONTENT (FORM + MAP) */}
      <section className="m-20 py-5">
        <div className="container mx-auto px-4">
          <div className="bg-[#FFF5F5] rounded-lg overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* LEFT SIDE - FORM */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <h1 className="text-4xl font-lobster mb-6">Send Us a Message</h1>

                <form onSubmit={handleSubmit}>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />

                    <input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                    required
                  />

                  <textarea
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
                  >
                    Send Message
                  </button>

                </form>
              </div>

              {/* MAP */}
              <div className="w-full h-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.809513936149!2d85.3190001153974!3d27.70116594984037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19688077a1ff%3A0x3ea9b1c08b4234dc!2sMindrisers%20Institute%20of%20Technology!5e0!3m2!1sen!2snp!4v1702080000000!5m2!1sen!2snp"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
