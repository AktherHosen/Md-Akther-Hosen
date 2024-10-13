import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      {/* <div className="px-5 sm:px-5 md:px-4 lg:px-2">
        <Outlet />
      </div> */}
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
