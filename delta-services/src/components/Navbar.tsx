import { useState } from "react";
import { Mail, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { logo } from "../assets/index";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center  group">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
              <img src={logo} alt="Delta Services Logo" className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline">
                {/* <span className="text-3xl font-bold text-blue-900">D</span> */}
                <span className="text-xl font-bold text-blue-900">DELTA</span>
                {/* <span className="text-3xl font-bold text-blue-900 ml-2">S</span> */}
                <span className="text-xl font-bold text-blue-900 ml-2">
                  SERVICES
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-orange-500 px-3 py-2 text-lg font-semibold transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-orange-500 px-3 py-2 text-lg font-semibold transition-colors duration-300 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-orange-500 px-3 py-2 text-lg font-semibold transition-colors duration-300 relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/career"
                className="text-gray-700 hover:text-orange-500 px-3 py-2 text-lg font-semibold transition-colors duration-300 relative group"
              >
                Careers
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-1 border-l border-gray-200 pl-6">
              <a
                href="mailto:amarnath.maddala@deltaservices.co.in"
                className="flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                amarnath.maddala@deltaservices.co.in
              </a>
              <a
                href="tel:+919390285875"
                className="flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 93902 85875
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-500 focus:outline-none focus:text-orange-500 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="pt-4 pb-2 space-y-1 border-t border-gray-100">
            <Link
              to="/"
              className="block px-3 py-3 text-lg font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-3 text-lg font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-3 text-lg font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/career"
              className="block px-3 py-3 text-lg font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>

            {/* Mobile Contact Info */}
            <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
              <a
                href="mailto:rajinikanth.cheera@deltaservices.co.in"
                className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-orange-500 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-3" />
                amarnath.maddala@deltaservices.co.in
              </a>
              <a
                href="tel:+919533151277"
                className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-orange-500 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 mr-3" />
                +91 93902 85875
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
