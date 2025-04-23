import React, { useContext } from 'react';
import { FaGift, FaUsers, FaDollarSign, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import AuthContext from '../../../../../context/AuthContext/AuthContext';

const stats = [
    {
        label: 'Total Gift',
        value: 5,
        icon: <FaGift className="text-2xl text-blue-500" />,
        bg: 'bg-blue-100',
    },
    {
        label: 'Total Recipients',
        value: 15,
        icon: <FaUsers className="text-2xl text-purple-500" />,
        bg: 'bg-purple-100',
    },
    {
        label: 'Spending Money',
        value: '$856',
        icon: <FaDollarSign className="text-2xl text-green-500" />,
        bg: 'bg-green-100',
    },
    {
        label: 'Purchased',
        value: 7,
        icon: <FaShoppingCart className="text-2xl text-pink-500" />,
        bg: 'bg-pink-100',
    },
];

const UserDashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="p-4">
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className="text-xl md:text-2xl font-bold">Welcome Back, {user?.displayName} !.</h3>
                    <p>Track and manage your gifts & spending</p>
                </div>
                
                    <div className="avatar online">
                        <div className="w-8 md:w-12 rounded-full">
                            {user?.photoURL ? (
                                <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
                            ) : (
                                <FaUserAlt className="text-gray-500 w-full h-full object-cover" />
                            )}

                        </div>
                    </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white shadow-md rounded-2xl p-3 md:p-4 flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${stat.bg}`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-gray-500">{stat.label}</p>
                            <h3 className="text-xl font-semibold">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserDashboard;
