import React, { useContext, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import links from "../../data/navlinks";
import { AppContext } from "../../AppContext";

function Navbar() {
  const { handleMenuToggle } = useContext(AppContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="overflow-x-clip sticky xl:-top-16 2xl:-top-16 z-40">
      {/* Top Navbar Section */}
      <div className="bg-white p-2 md:p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/logo.png"
              alt="logo"
              className="h-12 w-12 md:h-20 md:w-20"
            />
            <div className="ml-4 md:ml-8 text-center md:text-left">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-medium font-Nunito text-[#4B4B4B]">
                Met Veterans Association
              </h1>
              <h2 className="text-xs md:text-sm font-medium text-[#6F7775] mt-1">
                (Registered u/s 9(1) of the Haryana Registration and Regulation
                of Societies Act, 2012)
              </h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-blue-500" />
                <a href="tel:+918989289865" className="text-xs md:text-sm">
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#6F7775]">
                      Helpline
                    </span>
                    <span className="font-base text-[#7A7A7A]">
                      +91 8989-28985
                    </span>
                  </div>
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-500" />
                <a
                  href="mailto:info@metveteransassociation.org"
                  className="text-xs md:text-sm"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#6F7775]">
                      Send email
                    </span>
                    <span className="font-base text-[#7A7A7A]">
                      info@metveteransassociation.org
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              {[FaTwitter, FaFacebook, FaLinkedin, FaInstagram].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-8 h-8 md:w-10 md:h-10 bg-[#F9F4E8] rounded-full flex justify-center items-center text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Section */}
      <nav className="bg-white border-y-2 border-[#DCDCDC]">
        <div className="container mx-auto px-4 py-2 md:py-4 flex items-center justify-between">
          <button
            onClick={handleMenuToggle}
            className="font-extrabold text-sm md:text-base"
          >
            MENU
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8 border-x-[1px] border-[#CECECE] px-4 lg:px-6">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm lg:text-base cursor-pointer hover:border-b-2 border-black transition-all duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          <button className="hidden md:block bg-[#DE2A1B] text-white font-semibold text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3 rounded hover:bg-red-700 transition-colors duration-300">
            DONATE NOW
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-4">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-center py-2 text-base cursor-pointer hover:bg-gray-100"
              >
                {link}
              </a>
            ))}
            <button className="w-full bg-[#DE2A1B] text-white font-semibold text-base px-6 py-3 mt-4 hover:bg-red-700 transition-colors duration-300">
              DONATE NOW
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
