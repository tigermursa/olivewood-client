import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";

import NavItems from "../NavigationBar/Navitems";

const Layout = () => {
  return (
    <div>
      <NavigationBar />
      <NavItems />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
