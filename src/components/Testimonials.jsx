import React, { useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet.",
    name: "Client One",
    profession: "Profession",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Est stet ea lorem amet est kasd kasd erat eos. Tempor stet labore dolor clita stet diam.",
    name: "Client Two",
    profession: "Profession",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "Ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos.",
    name: "Client Three",
    profession: "Profession",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-16 bg-white relative">
      <div className="max-w-5xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((item, i) => (
            <div key={i} className="min-w-full flex justify-center">
              <div className="bg-orange-50 rounded-xl p-6 shadow-md w-[80%] relative">
                <p className="text-gray-600 leading-relaxed">{item.text}</p>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      className="w-14 h-14 rounded-full border-2 border-orange-400"
                    />
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">{item.name}</h3>
                      <p className="text-gray-500 text-sm">{item.profession}</p>
                    </div>
                  </div>

                  <FaQuoteRight className="text-orange-500 text-3xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-10 top-1/2 -translate-y-1/2 p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
        >
          <FaChevronLeft />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-10 top-1/2 -translate-y-1/2 p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
