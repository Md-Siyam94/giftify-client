import React from 'react';
import StatsSection from '../components/StatsSection';
import { FiFilter, FiGift } from 'react-icons/fi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { HiOutlineDotsVertical } from 'react-icons/hi';

const UserDashboard = () => {
    return (
        <>
            {/* Welcome Section */}
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
            {/* Stats for user */}
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
                                <HiOutlineDotsVertical className="w-4 h-4 text-gray-400" />
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
                                <HiOutlineDotsVertical className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDashboard;