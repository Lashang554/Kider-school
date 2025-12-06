import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";

const teachers = [
  {
    img: "/image/team-1.jpg",
    name: "Full Name",
    desig: "Designation",
  },
  {
    img: "/image/team-2.jpg",
    name: "Full Name",
    desig: "Designation",
  },
  {
    img: "/image/team-3.jpg",
    name: "Full Name",
    desig: "Designation",
  },
];

const Teachers = () => {

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="pb-20">
      <div className="text-center mb-10" data-aos="fade-up">
        <h1 className="text-4xl font-lobster mb-4">Popular Teachers</h1>
        <p className="max-w-2xl mx-auto mt-4 text-gray-500">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teachers.map((t, i) => (
          <div key={i} className="relative flex flex-col items-center" data-aos="fade-up">

            {/* OVAL IMAGE */}
            <div className="w-[260px] h-[400px] bg-pink-50 rounded-full overflow-hidden">
              <img
                src={t.img}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            {/* CIRCLE CARD */}
            <div
              
              className="
                absolute bottom-[-60px] w-[230px] h-[230px]
                bg-white rounded-full shadow-xl border-12 border-[#FFF5F5]
                flex flex-col items-center justify-center left-1/2 translate-x-[5%]
                transition-all duration-300 hover:border-orange-500"
            >
              <h3 className="font-inter font-bold text-xl">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.desig}</p>

              <div className="flex gap-4 mt-3 text-white">
                <div className="bg-orange-500 p-2 rounded-full"><FaFacebookF /></div>
                <div className="bg-orange-500 p-2 rounded-full"><FaTwitter /></div>
                <div className="bg-orange-500 p-2 rounded-full"><FaInstagram /></div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;
