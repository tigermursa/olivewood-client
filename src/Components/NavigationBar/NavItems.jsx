import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="mx-auto p-3" style={{ maxWidth: "1280px" }}>
        <ul className="flex space-x-6 p-1 font-semibold text-sm">
          <Link to="/" className="cursor-pointer hover:text-gray-400">
            Home
          </Link>
          <Link
            to="fsfd"
            className="cursor-pointer hover:text-gray-400 hidden md:block"
          >
            New Arrivals
          </Link>
          <Link to="fsfd" className="cursor-pointer hover:text-gray-400">
            About
          </Link>
          <Link
            to="fsfd"
            className="cursor-pointer hover:text-gray-400 hidden md:block"
          >
            On Sale
          </Link>
          <Link to="fsfd" className="cursor-pointer hover:text-gray-400">
            Pages
          </Link>
          <Link to="fsfd" className="cursor-pointer hover:text-gray-400">
            Blogs
          </Link>
          <Link to="fsfd" className="cursor-pointer hover:text-gray-400">
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavItems;
