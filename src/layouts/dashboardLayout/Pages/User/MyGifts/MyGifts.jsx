import { CgMenuGridO, CgMenuGridR } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { FaRegCalendarAlt, FaRegHeart } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { IoGiftOutline, IoSearchOutline, IoShareSocialOutline } from "react-icons/io5";

const giftCards = [
  {
    id: 1,
    title: "Birthday Celebration",
    recipient: "Sarah Johnson",
    date: "Mar 15, 2024",
    type: "Animation",
    status: "Delivered",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Anniversary Bundle",
    recipient: "Mike & Lisa",
    date: "Mar 20, 2024",
    type: "Bundle",
    status: "Scheduled",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Graduation Pack",
    recipient: "Tom Wilson",
    date: "Apr 5, 2024",
    type: "Pack",
    status: "Draft",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
  }
];

const MyGifts = () => {


  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4 md:p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My Gifts</h1>
            <p className="text-gray-500">Manage and track all your virtual gifts</p>
          </div>
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <IoGiftOutline  />
            <span>Create New Gift</span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 ">
          <div className="relative flex-grow">
          <IoSearchOutline className="text-gray-500 text-xl  translate-x-4  translate-y-8 " />
            <input
              type="text"
              placeholder="Search gifts..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
             
            />
          </div>
          <div className="flex gap-2 items-center">
            <button
            >
            <CgMenuGridR className=" text-gray-600 " />
            </button>
            <button
            >
              <IoIosList  className=" text-gray-600 " />
            </button>
            <select className="bg-white border px-4 py-2 border-gray-200 rounded-lg">
              <option>All Gifts</option>
              <option>Delivered</option>
              <option>Scheduled</option>
              <option>Draft</option>
            </select>
          </div>
        </div>

        {/* Gift Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {giftCards.map((gift) => (
            <div key={gift.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src={gift.image} alt={gift.title} className="w-full h-48 object-cover" />
                <button className="absolute top-4 right-4 p-1.5 bg-white rounded-full hover:bg-gray-100">
                <FaRegHeart className="text-gray-500 text-xl" />
                </button>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium">
                    {gift.status}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{gift.title}</h3>
                </div>
                <p className="text-gray-500 mb-3">To: {gift.recipient}</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="flex gap-2 items-center"> <FaRegCalendarAlt /> {gift.date}</span>
                  <span className="flex gap-2 items-center"> <IoGiftOutline /> {gift.type}</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-700 transition-colors">
                    Preview
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <IoShareSocialOutline className="text-gray-500 text-xl" />
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <CiEdit className="text-gray-500 text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyGifts;

