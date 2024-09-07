import React, { useContext } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"; // Import icons
import CloseIcon from "@mui/icons-material/Close";

import menuItems from "../../data/sideBarMenu";
import { AppContext } from "../../AppContext";
import "../../styles/sideBar.css";

function SideBarMenu() {
  const { menu, handleMenuToggle } = useContext(AppContext);
  return (
    <div
      className={`scrollbar-hide w-[459px] h-screen rounded-tr-[56px] rounded-br-[56px] py-[4.6rem] px-[3.1rem] bg-white fixed top-0 z-50 shadow-md transform overflow-y-scroll  ${
        menu ? "translate-x-0" : "-translate-x-[459px]"
      } transition-transform duration-300`}
    >
      {/* Menu Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b">
        <h2 className="font-poppins text-[14px]  leading-[24.7px] text-left text-[#8F8F8F]">
          MENU
        </h2>
        <button
          onClick={handleMenuToggle}
          className="w-10 h-10 hover:bg-black hover:text-white rounded-full group transition-all duration-200"
        >
          <CloseIcon
            style={{ fontSize: 30, fontWeight: 100 }}
            className="group-hover:text-white text-[#4D4D4D] transition-all duration-200"
          />
        </button>
      </div>

      {/* Menu Items */}
      <ul className="p-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`py-2 px-4 text-[20px] font-semibold leading-[35.29px] text-left font-Poppins flex justify-between items-center group hover:bg-[#DBE3F9] hover:text-[#696969] cursor-pointer`}
          >
            {item}
            <img
              src="/assets/arrow-right-sidebar.svg"
              alt="arrow-right"
              className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-transform duration-300 "
            />
          </li>
        ))}
      </ul>

      {/* Contact Us Section */}
      <div className="border-t mt-4 p-4">
        <h3 className="text-[16px] font-Inter font-medium leading-[28.23px] text-left mb-2 text-[#8F8F8F]">
          CONTACT US
        </h3>
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
  );
}

export default SideBarMenu;
