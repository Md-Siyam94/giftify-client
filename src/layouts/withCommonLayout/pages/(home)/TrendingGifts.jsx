import React from "react";
import { motion } from "framer-motion"; 

const TrendingGifts = () => {
  const gifts = [
    {
      id: 1,
      title: "Birthday Animation Pack",
      description: "Customizable animated birthday wishes",
      price: "$9.99",
      image: "/Birthday animated pack1.jpg",
    },
    {
      id: 2,
      title: "Amazon E-Gift Card",
      description: "Instant delivery, multiple designs",
      price: "$25-500",
      image: "/amazon-e-gift.jpg",
    },
    {
      id: 3,
      title: "Love Message Bundle",
      description: "Romantic animations and cards",
      price: "$12.99",
      image: "/love message bundle.jpg",
    },
    {
      id: 4,
      title: "Thank You Pack",
      description: "Express gratitude beautifully",
      price: "$7.99",
      image: "/thank-you-4975917_1280.jpg",
    },
  ];

  return (
    <>
      <div className="py-16 px-5 container mx-auto">
        <h2 className="md:text-3xl text-2xl font-semibold text-center mb-6">Trending Gifts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {gifts.map((gift) => (
            <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={gift.image}
                alt={gift.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{gift.title}</h3>
                <p className="text-gray-600 text-sm">{gift.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-lg font-bold text-purple-600">
                    {gift.price}
                  </span>
                  <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg text-sm">
                    Preview
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingGifts;
