import { Link } from 'react-router'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const AboutSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    })
  })
  return (
    <section className="py-16 bg-white m-15">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-up">
            <h1 className="text-4xl font-lobster mb-6">
              Learn More About Our Work And Our Cultural Activities
            </h1>
            <p className="text-gray-600 mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <p className="text-gray-600 mb-6">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                to="/about"
                className="bg-orange-500 hover:bg-orange-600 transition  btn-primary rounded-full px-8 py-3"
              >
                Read More
              </Link>
              <div className="flex items-center">
                <img
                  src="/image/user.jpg"
                  alt="CEO"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h6 className="text-primary font-semibold">Jhon Doe</h6>
                  <small className="text-gray-600">CEO & Founder</small>
                </div>
              </div>
            </div>
          </div>
          <div className="relative" data-aos="fade-up">
            <div className="w-full flex justify-center">
              <div className="rounded-full border-[14px] border-orange-100 hover:border-orange-500 transition-all duration-300">
                <img
                  src="/image/about-1.jpg"
                  alt="About"
                  className="rounded-full w-72 h-72 object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 -mt-32">
              <div className='rounded-full border-[14px] border-orange-100 hover:border-orange-500 transition-all duration-300'>
                <img
                  src="/image/about-2.jpg"
                  alt="About"
                  className="w-full rounded-full bg-gray-100 "

                />
              </div>
              <div className='rounded-full border-[14px] border-orange-100 hover:border-orange-500 transition-all duration-300'>
                <img
                  src="/image/about-3.jpg"
                  alt="About"
                  className="w-full rounded-full bg-gray-100 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

