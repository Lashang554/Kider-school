import { Link } from "react-router";
import ClassesSection from "../components/ClassesSection";
import Appointment from "../components/AppointmentSection";
import Testimonials from "../components/TestimonialSection";

const Classes = () => {
  return (
    <div>
      {/* 🔹 Top Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src="/image/carousel-1.jpg"
          alt="Classes"
          className="w-full h-full object-cover"
        />

        {/* Overlay + Text */}
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-lobster text-white mb-4">
              School Classes
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
                <li className="text-orange-400">Classes</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 🔹 Wave Bottom (Optional – same as About) */}
        <div className="absolute bottom-[-1px] w-full overflow-hidden">
          <svg viewBox="0 0 500 60" preserveAspectRatio="none" className="w-full h-[60px]">
            <path
              d="M0,30 C150,80 350,-20 500,30 L500,60 L0,60 Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>

      {/* Page Sections Below */}
      <ClassesSection />
      <Appointment />
      <Testimonials />
    </div>
  );
};

export default Classes;
