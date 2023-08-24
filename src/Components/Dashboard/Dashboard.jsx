import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { CgProfile } from "react-icons/cg";
import { FaUserShield, FaUserTie, FaHome,FaUsers } from "react-icons/fa";
import {
  MdOutlineAttachMoney,
  MdArrowCircleUp,
  MdOutlineLibraryAdd,
  MdShield,MdProductionQuantityLimits
} from "react-icons/md";
import NavbarForPhone from "./NavbarForPhone/NavbarForPhone";

const Dashboard = () => {

  return (
    <div>
      <div className="block md:hidden">
        <NavbarForPhone/>
      </div>
      <div className="drawer">
        {/* Add the 'checked' attribute to keep the sidebar open */}
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked
        />

        <div className="drawer-content">
          <Outlet />

          {/* Page content here */}
        </div>
        <div className="side-drawer-navigation">
          <label htmlFor="my-drawer" className=""></label>

          <ul className="menu p-4 w-80 h-full bg-blue-950 text-white hidden md:block">
            <h1 className="font-bold text-2xl flex items-center gap-2">
              <MdShield/>
              Admin Dashboard
            </h1>
            <br />
            {/* Sidebar content here */}
            <li>
              <NavLink to="/dashboard/customerslist">
                <FaUsers />
                Customers List
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/salary">
                <MdOutlineAttachMoney className="text-xl" />
                Order List
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/productlist">
                <MdProductionQuantityLimits className="text-xl" />
                Product List
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/signup">
                <MdOutlineLibraryAdd className="text-xl" />
                Add Product
              </NavLink>
            </li>
            <div className="divider text-white"></div>
            <hr />
            <li>
              <NavLink to="/">
                {" "}
                <FaHome />
                Home
              </NavLink>
              <NavLink to="/profile">
                {" "}
                <CgProfile />
               Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
