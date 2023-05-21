import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Root = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
