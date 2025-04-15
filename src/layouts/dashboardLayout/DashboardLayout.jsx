import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FiFilter, FiGift } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdKeyboardArrowRight, MdOutlineAnalytics, MdOutlineSettings } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import StatsSection from "./Pages/shared/StatsSection";
import { HiOutlineDotsVertical } from "react-icons/hi";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sideBarLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 font-semibold border-l-4 border-purple-500 pl-2 "
              : "text-gray-700 hover:text-purple-500 pl-2"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-gifts"
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
          to="/analytics"
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
          to="/messages"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 font-semibold border-l-4 border-purple-500 pl-2 flex items-center gap-x-1.5"
              : "text-gray-700 hover:text-purple-500 pl-2 flex items-center gap-x-1.5"
          }
        >
          <LuMessageSquareMore className="text-2xl" /> Messages
          <span className="ml-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">3</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
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
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 font-semibold border-l-4 border-purple-500 pl-2 flex items-center gap-x-1.5"
              : "text-gray-700 hover:text-purple-500 pl-2 flex items-center gap-x-1.5"
          }
        >
          <MdOutlineSettings className="text-2xl" /> Settings
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="md:flex ">
      {/* Sidebar (Large Screen) */}
      <div className="hidden md:block w-64 bg-white shadow-lg p-4 min-h-screen">
        <h2 className="text-xl font-bold text-purple-500 mb-4">Dashboard</h2>
        <ul className="space-y-4">{sideBarLinks}</ul>
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

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-50">
        {/* Welcome section */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">Welcome Back !...</h3>
            <p>Track and manage your virtual gifts</p>
          </div>
          <div className="flex items-center space-x-3 ">
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <button className="btn bg-purple-500 text-white"><FiGift /> Gifts </button>
            </div>
          </div>

        </div>
        {/* Stats section */}
        <StatsSection></StatsSection>
        {/* Recent/UpComing Gifts */}
        <div className="min-h-screen  p-4 md:p-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Gifts Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Recent Gifts</h2>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                  <FiFilter className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="text-purple-600 text-sm font-medium">View All</button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=48&h=48&fit=crop"
                        alt="Sarah"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Sarah Johnson</h3>
                      <p className="text-sm text-gray-500">Birthday Animation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Mar 15, 2024</p>
                      <p className="text-sm text-green-500">Delivered</p>
                    </div>
                    <button className="p-1 hover:bg-gray-100 rounded-full">
                      <MdKeyboardArrowRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose-100 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1513043105799-ba3f53df3ab7?w=48&h=48&fit=crop"
                        alt="Mike"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Mike Smith</h3>
                      <p className="text-sm text-gray-500">Anniversary Bundle</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Mar 14, 2024</p>
                      <p className="text-sm text-orange-500">Scheduled</p>
                    </div>
                    <button className="p-1 hover:bg-gray-100 rounded-full">
                    <MdKeyboardArrowRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Upcoming</h2>
                <button className="text-purple-600 text-sm font-medium">View Calendar</button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-1 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=48&h=48&fit=crop"
                        alt="David"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">David Wilson</h3>
                      <p className="text-sm text-gray-500">Tomorrow</p>
                    </div>
                  </div>
                  <HiOutlineDotsVertical className="w-4 h-4 text-gray-400"/>
                </div>

                <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-1 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=48&h=48&fit=crop"
                        alt="Lisa"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Lisa Anderson</h3>
                      <p className="text-sm text-gray-500">Next Week</p>
                    </div>
                  </div>
                  <HiOutlineDotsVertical  className="w-4 h-4 text-gray-400"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Outlet></Outlet> */}

      </div>
    </div>
  );
};

export default DashboardLayout;
