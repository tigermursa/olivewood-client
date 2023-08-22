import React from "react";
import { BsCreditCard, BsBoxSeam, BsCart3, BsSuitHeart } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { TbArrowsShuffle } from "react-icons/tb";
import SearchBar from "./Searchbar";
const NavigationBar = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="navbar bg-base-100 p-8" style={{ width: "1280px" }}>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl font-bold font-serif">
            Olive Wood
          </a>
          <div className="flex items-center gap-3 me-5 ms-5 ">
            <div>
              <div className="transform transition-transform hover:translate-y-[-10px]">
                <BsCreditCard className="text-5xl text-yellow-600 p-1" />
              </div>
            </div>
            <div>
              <h4 className="font-bold">100% Payments</h4>
              <h5 className="text-gray-500 text-sm font-semibold">
                Monthly Installment
              </h5>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="transform transition-transform hover:translate-y-[-10px]">
              <BsBoxSeam className="text-5xl text-yellow-600 p-1" />
            </div>
            <div>
              <h4 className="font-bold">14-Day Returns</h4>
              <h5 className="text-gray-500 text-sm font-semibold">
                Secure Payments
              </h5>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <TbArrowsShuffle className="text-2xl" />
                {/* <span className="badge badge-sm indicator-item bg-red-300 text-white">8</span> */}
              </div>
            </label>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <BsSuitHeart className="text-2xl" />
                <span className="badge badge-sm indicator-item bg-red-300 text-white">
                  8
                </span>
              </div>
            </label>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <BsCart3 className="text-2xl" />
                <span className="badge badge-sm indicator-item bg-red-300 text-white">
                  10
                </span>
              </div>
            </label>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="">
                <FaRegUserCircle className=" text-2xl" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default NavigationBar;
