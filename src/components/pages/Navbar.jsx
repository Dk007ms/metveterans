import React, { useRef, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import links from "../../data/navlinks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const navAnimation=useRef(null);

 

  return (
    <div className="overflow-x-clip sticky top-14 z-50">
      {/* Navbar Section */}
      <div ref={navAnimation} className="flex items-center justify-between bg-white p-4 px-16 shadow-md relative">
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-20 w-20" />
          <div className="ml-8 text-left">
            <h1 className="text-4xl font-medium font-Nunito text-[#4B4B4B]">
              Met Veterans Association
            </h1>
            <h2 className="text-xs font-medium text-[#6F7775]">
              (Registered u/s 9(1) of the Haryana Registration and Regulation of
              Societies Act, 2012)
            </h2>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-blue-500" />
              <a href="tel:+918989289865" className="text-sm">
                <div className="flex flex-col">
                  <span className="font-semibold text-xs text-[#6F7775]">
                    Helpline
                  </span>
                  <span className="font-base text-xs text-[#7A7A7A]">
                    +91 8989-28985
                  </span>
                </div>
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-500" />
              <a
                href="mailto:info@metveteransassociation.org"
                className="text-sm"
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-xs text-[#6F7775]">
                    Send email
                  </span>
                  <span className="font-base text-xs text-[#7A7A7A]">
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
                  className="w-10 h-10 bg-[#F9F4E8] rounded-full flex justify-center items-center text-gray-600 hover:text-black transition-colors duration-300"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Main Nav Section */}
      <nav
        className="w-full bg-white h-20 flex items-center justify-between px-16 border-y-2 border-[#DCDCDC]"
      >
        <button className="font-extrabold">MENU</button>
        <div className="flex items-center justify-center gap-16">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-base cursor-pointer hover:border-b-2 border-black transition-all duration-300"
            >
              {link}
            </a>
          ))}
        </div>
        <button className="bg-[#DE2A1B] text-white font-semibold text-base px-6 py-3 rounded hover:bg-red-700 transition-colors duration-300">
          DONATE NOW
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
