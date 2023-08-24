import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="mx-auto p-3" style={{ maxWidth: "1280px" }}>
        <ul className="flex space-x-6 p-1 font-semibold text-sm">
          <Link to ="/" className="cursor-pointer hover:text-gray-400">Home</Link>
          <li className="cursor-pointer hover:text-gray-400 hidden md:block">New Arrivals</li>
          <li className="cursor-pointer hover:text-gray-400">About</li>
          <li className="cursor-pointer hover:text-gray-400 hidden md:block">On Sale</li>
          <li className="cursor-pointer hover:text-gray-400">Pages</li>
          <li className="cursor-pointer hover:text-gray-400">Blogs</li>
          <li className="cursor-pointer hover:text-gray-400">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavItems;
