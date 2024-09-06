import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import "../styles/navStyle.css";

const Layout = () => {
  return (
    <div className="relative overflow-x-clip">
      {/* Marquee Section */}
      <div className="bg-[#DBE3F9] h-14 flex items-center sticky top-0 z-50">
        <div className="marquee flex items-center gap-4 font-semibold text-[#1C1C1C] whitespace-nowrap px-4">
          <div className="animate-marquee inline-block">
            <span className="mr-4">
              All donations to Human Peace Foundation Old Age Home are 50% Tax
              Exempt under section 80G of IT Act, 1961
            </span>
            <img
              className="w-4 inline-block mr-4"
              src="/assets/marqueeStar.png"
              alt="marqueeStar"
            />
          </div>
          <div className="animate-marquee inline-block">
            <span className="mr-4">
              All donations to Human Peace Foundation Old Age Home are 50% Tax
              Exempt under section 80G of IT Act, 1961
            </span>
            <img
              className="w-4 inline-block mr-4"
              src="/assets/marqueeStar.png"
              alt="marqueeStar"
            />
          </div>
        </div>
      </div>
      <Navbar />
      {/* Outlet renders the child routes' content */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
