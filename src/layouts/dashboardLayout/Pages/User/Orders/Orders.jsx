import React from 'react';
const orders = [
  {
    id: 1,
    giftName: "Virtual Concert Experience",
    image: "https://i.ibb.co/QD5WmSB/concert.png",
    date: "May 2, 2025",
    status: "Pending",
  },
  // {
  //   id: 2,
  //   giftName: "Amazon eGift Card",
  //   image: "https://i.ibb.co/BGr0DZc/amazon.png",
  //   date: "April 18, 2025",
  //   status: "Pending",
  // },
];

const Orders = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>

      <div className="bg-white shadow-md rounded-xl overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3">no.</th>
              <th className="px-6 py-3">transactionId</th>
              <th className="px-6 py-3">Order Date</th>
              <th className="px-6 py-3">Status</th>
              {/* <th className="px-6 py-3">Action</th> */}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id}>
                {/* <td className="px-6 py-4 flex items-center gap-3">
                    <img src={order.image} alt={order.giftName} className="w-12 h-12 rounded-lg" />
                    <span>{order.giftName}</span>
                  </td> */}
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">pi_3RKILvRxaEILvxeK0Yiq883i</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                    {order.status}
                  </span>
                </td>
                {/* <td className="px-6 py-4">
                    <button className="text-indigo-600 hover:underline">View Details</button>
                  </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;