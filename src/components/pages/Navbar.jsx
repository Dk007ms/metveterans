import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import links from "../../data/navlinks";
import "../../styles/navStyle.css"

function Navbar() {
  return (
    <div className="overflow-x-clip">
      <div className="bg-[#DBE3F9] h-14 flex sticky top-0">
        <div class="marquee flex items-center gap-4 font-semibold text-[#1C1C1C]">
          <span className="w-full">
            All donations to Human Peace Foundation Old Age Home are 50% Tax
            Exempt under section 80G of IT Act, 1961
          </span>{" "}
          <img
            className="w-4"
            src="/assets/marqueeStar.png"
            alt="marqueeStar"
          />
          <span className="w-full">
            All donations to Human Peace Foundation Old Age Home are 50% Tax
            Exempt under section 80G of IT Act, 1961
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-28 bg-white p-4 px-16 shadow-md">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-20 w-20" />
        </div>

        {/* Main Text Section */}
        <div className="text-center flex flex-col justify-start">
          <h1 className="text-4xl font-medium font-Nunito text-start text-[#4B4B4B]">
            Met Veterans Association
          </h1>
          <h2 className="text-[12px] font-medium text-[#6F7775]">
            (Registered u/s 9(1) of the Haryana Registration and Regulation of
            Societies Act, 2012)
          </h2>
        </div>

        {/* Contact Information Section */}
        <div className="flex items-center space-x-8">
          {/* Helpline */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-blue-500" />
            <a href="tel:+918989289865" className="text-sm">
              <div className="flex flex-col">
                <span className="font-semibold text-[12px] text-[#6F7775]">
                  Helpline
                </span>
                <span className="font-base text-[12px] text-[#7A7A7A]">
                  +91 8989-28985
                </span>
              </div>
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-500" />
            <a
              href="mailto:info@metveteransassociation.org"
              className="text-sm"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-[12px] text-[#6F7775]">
                  Send email
                </span>
                <span className="font-base text-[12px] text-[#7A7A7A]">
                  info@metveteransassociation.org
                </span>
              </div>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-[#F9F4E8] rounded-full flex justify-center items-center text-gray-600 hover:text-black"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#F9F4E8] rounded-full flex justify-center items-center text-gray-600 hover:text-black"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#F9F4E8] rounded-full flex justify-center items-center text-gray-600 hover:text-black"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#F9F4E8] rounded-full flex justify-center items-center text-gray-600 hover:text-black"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="w-screen h-20 sticky top-0 flex items-center justify-center gap-4 border-y-2 border-[#DCDCDC]">
        <button className="flex justify-center items-center font-extrabold relative right-8">
          MENU
        </button>
        <div className="border-x-[1px] border-[#CECECE] w-[75%] h-6 relative flex items-center justify-center gap-16">
          {links.map((link) => (
            <div
              key={link}
              className="text-base cursor-pointer hover:border-b-[0.1em]"
            >
              {link}
            </div>
          ))}
        </div>
        <button className="flex justify-center items-center bg-[#DE2A1B] text-[#ffffff] font-semibold text-base p-[1em] rounded-[0.25em] relative left-8">
          DONATE NOW
        </button>
      </div>
    </div>
  );
}

export default Navbar;
