import React, { useEffect, useState } from 'react'

const Carousel = () => {
  const slides = [
    {
      image: 'https://themewagon.github.io/kider/img/carousel-1.jpg ',
      heading: 'The Best Kindergarten School For Your Child',
      description:
        'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.'
    },
    {
      image: 'https://themewagon.github.io/kider/img/carousel-2.jpg',
      heading: 'Learning & Fun, All Day Long',
      description:
        'Diam dolor diam ipsum tempor sit. Aliqu diam amet diam et eos erat ipsum justo clita et rebum sea.'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [animateOnce, setAnimateOnce] = useState(true)

  // Run animation once on page load
  useEffect(() => {
    const timer = setTimeout(() => setAnimateOnce(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  // Auto Slide
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearTimeout(timer)
  }, [currentIndex, slides.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full h-140 sm:h-100 md:h-[600px] overflow-hidden bg-slate-900">
  <div
    className="flex transition-transform duration-700 ease-in-out h-full"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {slides.map((slide, index) => (
      <div key={index} className="min-w-full h-full relative">
        <img
          src={slide.image}
          alt={`Carousel ${index + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-10 lg:px-16">
            <div className="max-w-2xl p-4 md:p-8">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-lobster 
                ${animateOnce ? 'animate-slideDown' : ''}`}
              >
                {slide.heading}
              </h1>

              <p
                className={`text-white/90 text-base sm:text-lg md:text-xl mb-4 md:mb-6 leading-relaxed 
                ${animateOnce ? 'animate-fadeIn' : ''}`}
              >
                {slide.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  className={`bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold transition-all 
                  ${animateOnce ? 'animate-slideLeft' : ''}`}
                >
                  Learn More
                </button>

                <button
                  className={`bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold transition-all 
                  ${animateOnce ? 'animate-slideRight' : ''}`}
                >
                  Our Classes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Arrows */}
  <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-3 z-30">
    <button
      onClick={goToPrevious}
      className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition"
    >
      <i className="fas fa-chevron-left" />
    </button>
    <button
      onClick={goToNext}
      className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition"
    >
      <i className="fas fa-chevron-right" />
    </button>
  </div>
</div>

  )
}

export default Carousel
