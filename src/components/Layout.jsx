import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* Outlet renders the child routes' content */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
