import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div>

      {/* 🔹 Top Banner */}
      <div className="relative h-[350px] overflow-hidden">
        <img
          src="/image/carousel-1.jpg"
          alt="404 Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay + Title + Breadcrumbs */}
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-5">
            <h1 className="text-5xl font-lobster text-white mb-4">
              404 Error
            </h1>

            <nav className="text-white font-medium">
              <ol className="flex space-x-2 text-lg">
                <li>
                  <Link to="/" className="hover:text-orange-400">
                    Home
                  </Link>
                </li>
                <li>/</li>

                <li>
                  <Link to="#" className="hover:text-orange-400">
                    Pages
                  </Link>
                </li>
                <li>/</li>

                <li className="text-orange-400">
                  404 Error
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 🔹 Wave bottom design */}
        <div className="absolute bottom-[-1px] w-full overflow-hidden">
          <svg viewBox="0 0 500 60" preserveAspectRatio="none" className="w-full h-[60px]">
            <path d="M0,30 C150,80 350,-20 500,30 L500,60 L0,60 Z" fill="white"></path>
          </svg>
        </div>
      </div>

      {/* 🔹 Bottom Content */}
      <div className="flex flex-col items-center text-center py-20 px-4 bg-white">
        
        <FaExclamationTriangle className="text-orange-500 text-6xl mb-6" />

        <h1 className="text-9xl font-bold text-[#1E3A45]">404</h1>

        <h2 className="text-4xl font-lobster mt-2 mb-4 text-[#1E3A45]">
          Page Not Found
        </h2>

        <p className="text-gray-500 max-w-xl mb-8">
          We’re sorry, the page you have looked for does not exist on our website!
          Maybe go back to the home page or try another page.
        </p>

        <Link
          to="/"
          className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-orange-600 transition-all"
        >
          Go Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
