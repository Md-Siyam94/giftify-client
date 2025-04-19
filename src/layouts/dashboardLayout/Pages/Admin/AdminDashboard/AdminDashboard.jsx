import React, { useContext } from 'react';
import StatsSection from '../../User/components/StatsSection';
import { FiFilter, FiGift } from 'react-icons/fi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import AuthContext from '../../../../../context/AuthContext/AuthContext';
import { FaUserAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../../hooks/useAxiosPublic';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const AdminDashboard = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [latestGifts, setLatestGifts] = useState([]);
    const [showUserModal, setShowUserModal] = useState(false);
    const [showGiftModal, setShowGiftModal] = useState(false);

    useEffect(() => {
        axiosPublic.get("/giftify/gifts") // all gifts
            .then(res => {
                const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                const latest = sorted.slice(0, 4); // latest 4 gifts
                setLatestGifts(latest);
            })
            .catch(err => console.error("Failed to fetch gifts", err));
    }, []);

    const { data: users = [], refetch } = useQuery({
        queryKey: ['all-users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/giftify/users');
            return res.data;
        },
    });
    const { data: gifts = [], refetch: refetchGifts } = useQuery({
        queryKey: ['all-gifts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/giftify/gifts');
            return res.data;
        },
    });

    const handleUserDelete = async (id) => {
        try {
            await axiosPublic.delete(`/giftify/users/delete/${id}`);
            refetch();
            toast.success("User deleted!");
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete user");
        }
    };
    const handleGiftDelete = async (id) => {
        try {
            await axiosPublic.delete(`/giftify/gifts/delete/${id}`);
            refetchGifts();
            toast.success("Gift deleted Successfully");
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete Gift");
        }
    };

    return (
        <>
            {/* Welcome Section */}
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold">Welcome Back, {user?.displayName} !.</h3>
                    <p>Track and manage your virtual gifts</p>
                </div>
                <div className="flex items-center space-x-3 ">
                    <div className="avatar online">
                        <div className="w-8 md:w-12 rounded-full">
                            {user?.photoURL ? (
                                <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
                            ) : (
                                <FaUserAlt className="text-gray-500 w-full h-full object-cover" />
                            )}

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

                    {/* Latest Gift Section */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold text-gray-800">Latest Gifts</h2>
                            <div className="flex items-center gap-2">
                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                    <FiFilter className="w-4 h-4 text-gray-400" />
                                </button>
                                <button
                                    onClick={() => setShowGiftModal(true)}
                                    className="text-purple-600 text-sm font-medium"
                                >
                                    View All
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                        {latestGifts.map((l_gift) => (
                    <div key={l_gift._id} className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-1 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                    src={l_gift.image}
                                    alt={l_gift.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-800">{l_gift.title}</h3>
                                <p className="text-sm text-gray-500">{l_gift.category}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-right">
                                <p className="text-sm text-gray-600">
                                    {new Date(l_gift.createdAt).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                                <p className="text-sm text-green-500">Delivered</p>
                            </div>
                            <button className="p-1 hover:bg-gray-100 rounded-full">
                                <MdKeyboardArrowRight className="w-4 h-4 text-gray-400" />
                            </button>
                        </div>
                    </div>
                ))}
                        </div>
                    </div>

                    {/* Recent User Section */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold text-gray-800">Recent User</h2>
                            <div className="flex items-center gap-2">
                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                    <FiFilter className="w-4 h-4 text-gray-400" />
                                </button>
                                <button onClick={() => setShowUserModal(true)} className="text-purple-600 text-sm font-medium">
                                    View All
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-cyan-100 rounded-lg overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=48&h=48&fit=crop"
                                            alt="David"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">David Johnson</h3>
                                        <p className="text-sm text-gray-500">davidjohnson4545@gmail.com</p>
                                    </div>
                                </div>
                                <button className="p-1 hover:bg-gray-100 rounded-full">
                                    <MdKeyboardArrowRight className="w-4 h-4 text-gray-400" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-rose-100 rounded-lg overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=48&h=48&fit=crop"
                                            alt="Lisa"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Lisa Anderson</h3>
                                        <p className="text-sm text-gray-500">anderson555lisa@gmail.com</p>
                                    </div>
                                </div>
                                <button className="p-1 hover:bg-gray-100 rounded-full">
                                    <MdKeyboardArrowRight className="w-4 h-4 text-gray-400" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

    {/* ~~~~~~All User Showing Modal  */}
            {showUserModal && (
                <dialog id="user_modal" className="modal modal-open p-4">
                    <div className="modal-box max-w-4xl w-full">
                        <h3 className="font-bold text-lg mb-4">All Users</h3>

                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th>Avatar</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users?.map((user) => (
                                        <tr key={user._id}>
                                            <td>
                                                {user.image ? (
                                                    <div className="avatar">
                                                        <div className="w-8 rounded-full">
                                                            <img src={user.image} alt="avatar" />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <FaUserAlt className="text-gray-500 w-6 h-6" />
                                                )}
                                            </td>
                                            <td>{user.name || 'Unknown'}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <button onClick={() => handleUserDelete(user._id)} className="btn btn-sm btn-error text-white">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="modal-action">
                            <form method="dialog">
                                <button onClick={() => setShowUserModal(false)} className="btn">
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
 {/*~~~~~~~~ All Gift Showing Modal  */}
            {showGiftModal && (
                <dialog id="gift_modal" className="modal modal-open px-4 py-6">
                    <div className="modal-box max-w-4xl w-full">
                        <h3 className="font-bold text-lg mb-4">All Gifts</h3>

                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Category</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gifts?.map((gift) => (
                                        <tr key={gift._id}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=48&h=48&fit=crop"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    {gift.title || 'N/A'}
                                                </div>
                                            </td>
                                            <td>{gift.description || 'N/A'}</td>
                                            <td>{gift.price ? `$${gift.price}` : 'N/A'}</td>
                                            <td>{gift.cetegory || 'N/A'}</td>
                                            <td>
                                                <button onClick={() => handleGiftDelete(gift._id)} className="btn btn-sm btn-error text-white">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="modal-action">
                            <form method="dialog">
                                <button onClick={() => setShowGiftModal(false)} className="btn">
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );


};

export default AdminDashboard;