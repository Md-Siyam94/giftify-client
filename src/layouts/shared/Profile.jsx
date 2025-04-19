import React, { useContext } from 'react';
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
import AuthContext from '../../context/AuthContext/AuthContext';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="relative h-48 rounded-md bg-gradient-to-r from-rose-200 to-teal-100">
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
          <FiCamera className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 -mt-16">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
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
                  <p className="text-gray-600 flex gap-2 items-center"><span className='text-green-500'> <RiVerifiedBadgeFill /></span> Admin</p>
                  <p className="text-gray-600">{user?.role}</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Edit Profile
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Share Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Basic Info */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <FiMail className="w-5 h-5 mr-3" />
                    <span>{user?.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiPhone className="w-5 h-5 mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiMapPin className="w-5 h-5 mr-3" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiGlobe className="w-5 h-5 mr-3" />
                    <a href="http://www.adminweb.com" className="text-purple-600 hover:underline">
                      www.adminweb.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Social Profiles</h2>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <FaFacebookF className="w-5 h-5 text-blue-600" />
                    <span className="ml-2">Facebook</span>
                  </button>
                  <button className="flex items-center justify-center p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <FaTwitter className="w-5 h-5 text-blue-400" />
                    <span className="ml-2">Twitter</span>
                  </button>
                  <button className="flex items-center justify-center p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <FaInstagram className="w-5 h-5 text-pink-600" />
                    <span className="ml-2">Instagram</span>
                  </button>
                  <button className="flex items-center justify-center p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <FaLinkedinIn className="w-5 h-5 text-blue-700" />
                    <span className="ml-2">LinkedIn</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - About Me & Activity */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">About Me</h2>
                <p className="text-gray-600">
                  Passionate about creating meaningful digital experiences. Love sending virtual gifts that make people smile.
                </p>

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

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <FiGift className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">Gift Sent</p>
                      <p className="text-sm text-gray-600">Birthday Animation to Sarah Johnson</p>
                    </div>
                    <span className="ml-auto text-sm text-gray-500">Just now</span>
                  </div>

                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FiCamera className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">Profile Updated</p>
                      <p className="text-sm text-gray-600">Changed profile picture</p>
                    </div>
                    <span className="ml-auto text-sm text-gray-500">1 day ago</span>
                  </div>

                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <FiCreditCard className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">New Payment Method</p>
                      <p className="text-sm text-gray-600">Added new credit card</p>
                    </div>
                    <span className="ml-auto text-sm text-gray-500">3 days ago</span>
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
