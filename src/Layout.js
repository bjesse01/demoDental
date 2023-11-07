import React from "react";
import { Outlet } from "react-router-dom";
import { Media } from "./components/Media";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Media />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
