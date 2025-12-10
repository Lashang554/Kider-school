import { Link } from "react-router";
import Facilities from "../components/Facilities";

const Facility = () => {
  return (
    <div>

      {/* 🔹 HERO SECTION */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src="/image/carousel-1.jpg"
          alt="School Facilities"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-lobster text-white mb-4">
              School Facilities
            </h1>

            {/* Breadcrumb */}
            <nav className="text-white">
              <ol className="flex space-x-2 text-lg font-medium">
                <li>
                  <Link to="/" className="hover:text-orange-400">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/facility" className="hover:text-orange-400">
                    Pages
                  </Link>
                </li>
                <li>/</li>
                <li className="text-orange-400">School Facilities</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 🔹 Wave Bottom */}
        <div className="absolute bottom-[-1px] w-full overflow-hidden">
          <svg viewBox="0 0 500 60" preserveAspectRatio="none" className="w-full h-[60px]">
            <path
              d="M0,30 C150,80 350,-20 500,30 L500,60 L0,60 Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>

      {/* Component Section */}
      <Facilities />
    </div>
  );
};

export default Facility;
