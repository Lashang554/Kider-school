import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
      image: "/image/testimonial-1.jpg",
      name: "Client Name",
      profession: "Profession"
    },
    {
      text: "Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.",
      image: "/image/testimonial-2.jpg",
      name: "Client Name",
      profession: "Profession"
    },
    {
      text: "Eirmod diam at dolor est vero nonumy magna. Labore duo duo sit no sea diam. Et dolor et kasd ea. Stet no et lorem dolor et diam, amet duo ut dolore vero eos.",
      image: "/image/testimonial-3.jpg",
      name: "Client Name",
      profession: "Profession"
    }
  ]

  useEffect(() => {
    AOS.init({ duration: 700, once: true })
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-lobster mb-4 text-teal-700">
            Our Clients Say!
          </h1>
          <p className="text-gray-600">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">

          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className=" m-12 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16
            z-10 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12
            flex items-center justify-center transition-all shadow-lg"
          >
            <FaChevronLeft />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-12">
            {getVisibleTestimonials().map((t, index) => (
              <div
                key={index}
                className="bg-[#FFF5F5] rounded-xl p-15 shadow-lg relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Text */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t.text}
                </p>

                {/* Client Info */}
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h6 className="text-teal-700 font-lobster text-xl font-semibold">
                      {t.name}
                    </h6>
                    <p className="text-gray-600 text-sm">{t.profession}</p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="absolute bottom-4 right-4 text-orange-500">
                  <FaQuoteRight className="text-4xl opacity-50" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            className=" m-12 absolute right-0 top-1/2 -translate-y-1/2 translate-x-16
            z-10 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12
            flex items-center justify-center transition-all shadow-lg"
          >
            <FaChevronRight />
          </button>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
