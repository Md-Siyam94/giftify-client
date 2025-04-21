import React, { useState } from "react";
import { FaChevronLeft, FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";
import { MdOutlineAnalytics, MdOutlineLibraryAdd, MdOutlineSettings, MdOutlineSpaceDashboard } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sideBarLinks = (
    <>
      <li>
        <NavLink
          to="/dashboard/admin_dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 font-semibold border-l-4 border-purple-500 pl-2 flex items-center gap-x-1.5"
              : "text-gray-700 hover:text-purple-500 pl-2 flex items-center gap-x-1.5"
          }
        >
          <MdOutlineSpaceDashboard className="text-2xl" /> Overview
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 font-semibold border-l-4 border-purple-500 pl-2 flex items-center gap-x-1.5"
              : "text-gray-700 hover:text-purple-500 pl-2 flex items-center gap-x-1.5"
          }
        >
          <FaRegUserCircle className="text-2xl" /> Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/myGifts"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 font-semibold border-l-4 border-purple-500 pl-2 flex items-center gap-x-1.5"
              : "text-gray-700 hover:text-purple-500 pl-2 flex items-center gap-x-1.5"
          }
        >
          <FiGift className="text-2xl" /> My Gifts
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/wishlist"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 font-semibold border-l-4 border-purple-500 pl-2 flex items-center gap-x-1.5"
              : "text-gray-700 hover:text-purple-500 pl-2 flex items-center gap-x-1.5"
          }
        >
          <FaRegHeart className="text-2xl" /> Wishlist
        </NavLink>
      </li> */}

      {/* Admin links */}

      <li>
        <NavLink
          to="/dashboard/analytics"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 font-semibold border-l-4 border-purple-500 pl-2 flex items-center gap-x-1.5"
              : "text-gray-700 hover:text-purple-500 pl-2 flex items-center gap-x-1.5"
          }
        >
          <MdOutlineAnalytics className="text-2xl" /> Analytics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/add_gifts"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 font-semibold border-l-4 border-purple-500 pl-2 flex items-center gap-x-1.5"
              : "text-gray-700 hover:text-purple-500 pl-2 flex items-center gap-x-1.5"
          }
        >
          <MdOutlineLibraryAdd className="text-2xl" /> Add Gifts
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 font-semibold border-l-4 border-purple-500 pl-2 flex items-center gap-x-1.5"
              : "text-gray-700 hover:text-purple-500 pl-2 flex items-center gap-x-1.5"
          }
        >
          <FaRegUserCircle className="text-2xl" /> Profile
          {/* <span className="ml-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">3</span> */}
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 font-semibold border-l-4 border-purple-500 pl-2 flex items-center gap-x-1.5"
              : "text-gray-700 hover:text-purple-500 pl-2 flex items-center gap-x-1.5"
          }
        >
          <MdOutlineSettings className="text-2xl" /> Settings
        </NavLink>
      </li> */}
    </>
  );

  return (
    <div className="md:flex ">
      {/* Sidebar (Large Screen) */}
      <div className="hidden  md:block w-64 bg-white shadow-lg p-4 min-h-svh">
        <h2 className="text-xl font-bold text-purple-500 mb-4">Dashboard</h2>
        <ul className="space-y-4">{sideBarLinks}</ul>
        <hr className="my-6 " />
        <div className="border-2 border-purple-500 flex justify-center hover:bg-purple-400 text-purple-600 hover:text-white py-2 rounded-md">
          <Link to="/" className="text-xl font-semibold flex items-center gap-2  ">
            <FaChevronLeft /> Back to Home
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <div className="md:hidden flex items-start p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="text-purple-500 text-2xl"
        >
          <IoMenu />
        </button>
      </div>

      {/* Drawer Modal for Small Devices */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed left-0 top-0 w-64 h-full bg-white shadow-lg p-4">
            <button
              onClick={() => setIsOpen(false)}
              className=" absolute top-4 right-4"
            >
              <IoClose className="text-red-500 text-2xl " />
            </button>
            <h2 className="text-xl font-bold text-purple-500 mb-4">Dashboard</h2>
            <ul className="space-y-4">{sideBarLinks}</ul>
          </div>
        </div>
      )}

      {/* Outlet / Main Content Area */}
      <div className="flex-1 p-6 bg-gray-50">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
