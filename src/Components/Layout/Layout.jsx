import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import NavItems from "../NavigationBar/Navitems";
import Loader from "../Loader/Loader";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(false); // Loading state

  return (
    <div>
      <NavigationBar />
      <NavItems />

      {/* Conditional rendering based on loading state */}
      {isLoading ? (
        <Loader />
      ) : (
        <Outlet
          onLoad={() => setIsLoading(true)}
          onUnload={() => setIsLoading(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Layout;
