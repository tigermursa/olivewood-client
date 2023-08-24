import React from "react";

import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="pt-12">
      <div className="drawer">
        {/* Add the 'checked' attribute to keep the sidebar open */}
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked
        />
        <div className="drawer-content">
          {/* Page content here */} <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className=""></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink to="/dashboard/allemployees">All Employees</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/salary">Salary</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/topattendance">Top Attendance</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
