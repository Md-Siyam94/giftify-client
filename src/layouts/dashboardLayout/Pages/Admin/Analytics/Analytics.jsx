// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { useEffect, useState } from "react";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    LineChart,
    Line,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
    Area,
    AreaChart,
} from "recharts";
import useAxiosPublic from "../../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const barData = [
    { name: "Lorem", uv: 400 },
    { name: "Dolor", uv: 300 },
    { name: "Consectetuer", uv: 200 },
    { name: "Adipiscing", uv: 278 },
];

const lineData = [
    { name: "Apr", uv: 100, pv: 200 },
    { name: "May", uv: 120, pv: 100 },
    { name: "Jun", uv: 150, pv: 120 },
    { name: "Jul", uv: 170, pv: 180 },
    { name: "Aug", uv: 200, pv: 150 },
    { name: "Sep", uv: 240, pv: 220 },
    { name: "Oct", uv: 260, pv: 190 },
    { name: "Nov", uv: 280, pv: 230 },
    { name: "Dec", uv: 300, pv: 210 },
];

const pieData = [
    { name: "Personal", value: 60 },
    { name: "Business", value: 40 },
];

const COLORS = ["#FF007F", "#FFAA00"];

const progressData = [
    { label: "Progress 1", value: 70 },
    { label: "Progress 2", value: 40 },
    { label: "Progress 3", value: 60 },
];
const data = [
    { name: 'Day 1', value: 1000 },
    { name: 'Day 2', value: 2500 },
    { name: 'Day 3', value: 3800 },
    { name: 'Day 4', value: 3700 },
    { name: 'Day 5', value: 3500 },
    { name: 'Day 6', value: 4100 },
    { name: 'Day 7', value: 5320 },
];

const Analytics = () => {
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const [monthlyUsers, setMonthlyUsers] = useState([]);
    const [pieData, setPieData] = useState([]);
    const axiosPublic = useAxiosPublic();
    // Fetch monthly User Registration data
    useEffect(() => {
        axiosPublic.get("/giftify/users/monthly-users")
            .then(res => setMonthlyUsers(res.data))
            .catch(err => console.error(err));
    }, []);
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Fetch Monthly Earning data
    const { data: monthlyEarnings = [] } = useQuery({
        queryKey: ['monthly-earnings'],
        queryFn: async () => {
            const res = await axiosPublic.get('/giftify/payments/monthly-earnings');
            return res.data;
        }
    });
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const formattedData = monthlyEarnings.map(item => ({
        name: monthNames[item.month - 1],
        value: parseFloat(item.total.toFixed(2))
    }));
    // Fetch purchasing user data for pie
    useEffect(() => {
        axiosPublic.get("/giftify/users/purchase-stats")
            .then(res => {
                const { purchased, notPurchased } = res.data;
                const piechartData = [
                    { name: "Purchased", value: purchased },
                    { name: "Not Purchased", value: notPurchased },
                ];
                console.log(res.data)
                setPieData(piechartData);
            })
            .catch(err => console.error(err));
    }, []);


    return (
        <>
            <div className=" p-6 bg-gray-100 min-h-screen">
                <h4 className="text-xl font-semibold py-4">Analytics</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
                    <div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h4 className="text-3xl font-bold text-p"><small>User Registration</small></h4>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={monthlyUsers}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="users" fill="#7c3aed" radius={[6, 10, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
                    <div className="rounded-xl shadow-md p-4 bg-white ">
                        <h4 className="text-3xl font-bold text-p"><small>Earnings</small></h4>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={formattedData}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.4} />
                                        <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area
                                    type="step" //"step","basis","linear"
                                    dataKey="value"
                                    stroke="#8b5cf6"
                                    fillOpacity={1}
                                    fill="url(#colorValue)"
                                    strokeWidth={3}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    {/* Pie Charts */}
                    <div className="bg-white p-4 rounded-2xl shadow flex flex-col items-center">
                        <h2 className="text-xl font-semibold mb-4">User Purchase Data</h2>
                        <PieChart width={220} height={220}>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={70}
                                fill="bg-s"
                                paddingAngle={2}
                                dataKey="value"
                                label
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>


                    {/* Bar Chart */}
                    {/* <div className="bg-white p-4 rounded-2xl shadow">
                        <h2 className="text-xl font-semibold mb-4">Bar Chart</h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={barData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="uv" fill="#FF007F" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div> */}

                    {/* Line Chart */}
                    {/* <div className="bg-white p-4 rounded-2xl shadow col-span-1 md:col-span-2">
                        <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={lineData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="uv" stroke="#FF007F" strokeWidth={2} />
                                <Line type="monotone" dataKey="pv" stroke="#FFD700" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div> */}

                    {/* Progress Bars */}
                    {/* <div className="bg-white p-4 rounded-2xl shadow">
                        <h2 className="text-xl font-semibold mb-4">Progress</h2>
                        {progressData.map((item, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex justify-between mb-1">
                                    <span>{item.label}</span>
                                    <span>{item.value}%</span>
                                </div>
                                <div className="w-full bg-gray-200 h-2 rounded">
                                    <div
                                        className="h-2 rounded bg-gradient-to-r from-pink-500 to-yellow-500"
                                        style={{ width: `${item.value}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div> */}

                    {/* Calendar */}
                    {/* <div className="bg-white p-4 rounded-2xl shadow">
                        <h2 className="text-xl font-semibold mb-4">Calendar</h2>
                        <div className="grid grid-cols-7 text-center text-sm">
                            {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
                                <div key={idx} className="font-bold text-pink-500">
                                    {day}
                                </div>
                            ))}
                            {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                                <div
                                    key={date}
                                    className={`p-2 rounded-full m-1 ${[6, 9, 24].includes(date)
                                        ? "bg-pink-500 text-white"
                                        : "hover:bg-pink-100"
                                        }`}
                                >
                                    {date}
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Analytics;





