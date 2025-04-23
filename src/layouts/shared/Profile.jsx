import React, { use, useContext, useState } from 'react';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiGlobe,
  FiCamera,
  FiGift,
  FiCreditCard,
  FiStar
} from 'react-icons/fi';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import AuthContext from '../../context/AuthContext/AuthContext';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useUser from '../../hooks/useUser';
import Swal from 'sweetalert2';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const [userInformation] = useUser();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    website: ''
  });

  const { data: userInfo, refetch } = useQuery({
    queryKey: ['user', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/giftify/users/${user?.email}`);
      setFormData({
        phone: res.data?.phone || '',
        address: res.data?.address || '',
        website: res.data?.website || ''
      });
      return res.data;
    },
    enabled: !!user?.email
  });

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out my profile!',
        text: 'View this awesome profile on Giftyfy',
        url: window.location.href,
      }).then(() => {
        console.log('Shared successfully');
      }).catch(err => {
        console.error('Error sharing:', err);
      });
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (id) => {
    try {
      await axiosPublic.patch(`/giftify/users/update/${id}`, formData)
      .then(res=>{
        console.log(res.data)
        if(res.data.success){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Update Profile Successfull",
            showConfirmButton: false,
            timer: 1500
          });
          
        }
        setIsEditing(false);
          refetch();
      })
     
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="relative h-48 rounded-md bg-gradient-to-r from-rose-200 to-teal-100">
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
          <FiCamera className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="container mx-auto px-4 -mt-16">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            <div className="relative">
              <img
                src={user?.photoURL}
                alt="User Profile"
                className="w-32 h-32 rounded-lg border-4 border-white shadow-lg"
              />
              <div className="absolute -top-2 -right-2 bg-purple-500 rounded-full p-1.5">
                <FiStar className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex-grow mt-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {user?.displayName}
                  </h1>
                  <p>{user?.email}</p>
                  <p className="text-gray-600 flex gap-2 items-center">
                    <span className='text-green-500'><RiVerifiedBadgeFill /></span>{userInformation?.role}
                  </p>
                </div>
                <div className="flex gap-3">
                  {isEditing ? (
                    <>
                      <button
                        onClick={() => handleSave(userInfo._id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        Edit Profile
                      </button>
                      <button
                        onClick={handleNativeShare}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Share Profile
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Basic Info */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-center">
                    <FiMail className="w-5 h-5 mr-3" />
                    <span>{user?.email}</span>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="w-5 h-5 mr-3" />
                    {isEditing ? (
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1 w-full"
                        placeholder="+880--3823...345"
                      />
                    ) : (
                      userInfo?.phone ? (
                        <span>{userInfo.phone}</span>
                      ) : (
                        <span className="text-gray-300">+880--3823...345</span>
                      )
                    )}
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="w-5 h-5 mr-3" />
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        value={formData.address || ''}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1 w-full"
                        placeholder="Enter your address"
                      />
                    ) : (
                      userInfo?.address ? (
                        <span>{userInfo.address}</span>
                      ) : (
                        <span className="text-gray-300">No address added</span>
                      )
                    )}
                  </div>

                  <div className="flex items-center">
                    <FiGlobe className="w-5 h-5 mr-3" />
                    {isEditing ? (
                      <input
                        type="text"
                        name="website"
                        value={formData.website || ''}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1 w-full"
                        placeholder="https://yourwebsite.com"
                      />
                    ) : userInfo?.website ? (
                      <a
                        href={userInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {userInfo.website}
                      </a>
                    ) : (
                      <span className="text-gray-300">No website link</span>
                    )}
                  </div>

                </div>
              </div>
              {/* ~~~~~TODO: Social profiles can also be added if needed */}
            </div>

            {/* Right Column - About Me & Activity */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">My Activity</h2>
                {/* <h2 className="text-lg font-semibold text-gray-900 mb-4">About Me</h2>
                <p className="text-gray-600">
                  Passionate about creating meaningful digital experiences. Love sending virtual gifts that make people smile.
                </p> */}
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">248</div>
                    <div className="text-sm text-gray-600">Gifts Sent</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">1,423</div>
                    <div className="text-sm text-gray-600">Recipients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">4.9</div>
                    <div className="text-sm text-gray-600">Avg. Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
