import React from "react";
import { FiGift } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { MdCreditCard, MdFavorite } from "react-icons/md";

const stats = [
  {
    id: 1,
    icon: <FiGift className="text-purple-600 text-2xl" />,
    bgColor: "bg-purple-100",
    value: "248",
    label: "Gifts Sent",
    growth: "12%",
  },
  {
    id: 2,
    icon: <FaUsers className="text-blue-600 text-2xl" />,
    bgColor: "bg-blue-100",
    value: "1,423",
    label: "Recipients",
    growth: "8%",
  },
  {
    id: 3,
    icon: <MdCreditCard className="text-green-600 text-2xl" />,
    bgColor: "bg-green-100",
    value: "$2,856",
    label: "Total Spent",
    growth: "24%",
  },
  {
    id: 4,
    icon: <MdFavorite className="text-pink-600 text-2xl" />,
    bgColor: "bg-pink-100",
    value: "4.9",
    label: "Avg. Rating",
    growth: "18%",
  },
];

const StatsSection = () => {
  return (
    <div className="p-2 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center">
            <div >
              <div className={`px-4 py-2   rounded-md ${stat.bgColor}`}>{stat.icon}</div>
              <div className="mt-3">
                <h3 className="text-xl font-bold">{stat.value}</h3>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            </div>
            <span className="text-green-500 text-sm font-semibold">▲ {stat.growth}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
