import { FaBus } from "react-icons/fa";
import { FaFutbol } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Facilities = () => {

  useEffect(() => {
    AOS.init({
      duration: 20, // animation speed
      once: true,     // only on first scroll
      easing: "ease-out"
    });
  }, []);

  const data = [
    {
      icon: <FaBus className="text-5xl text-orange-500" />,
      title: "School Bus",
      desc: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      bg: "bg-orange-100"
    },
    {
      icon: <FaFutbol className="text-5xl text-green-600" />,
      title: "Playground",
      desc: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      bg: "bg-green-100"
    },
    {
      icon: <FaHouseUser className="text-5xl text-yellow-500" />,
      title: "Healthy Canteen",
      desc: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      bg: "bg-yellow-100"
    },
    {
      icon: <FaChalkboardTeacher className="text-5xl text-sky-500" />,
      title: "Positive Learning",
      desc: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      bg: "bg-sky-100"
    },
  ];

  return (
    <section className="py-10 m-15">
      {/* Title */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-5xl font-inter font-extrabold text-gray-800 mb-4">
          School Facilities
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit.
          Ipsum diam justo sed rebum vero dolor duo.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto m-15">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={index * 200} // animate one by one
          >
            {/* Top Circle */}
            <div
              className={`w-32 h-32 rounded-full flex items-center justify-center ${item.bg} mb-[-60px] z-10 
                transition-all duration-300 group-hover:scale-110 group-hover:brightness-110`}
            >
              <div className="transition-all duration-300 group-hover:scale-125">
                {item.icon}
              </div>
            </div>

            {/* Bottom Circle */}
            <div
              className={`w-72 h-72 rounded-full flex flex-col justify-center px-6 ${item.bg}
                transition-all duration-300 group-hover:brightness-110 group-hover:shadow-2xl`}
            >
              <h2 className="text-3xl font-inter font-bold text-gray-800 mb-3">{item.title}</h2>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Facilities;
