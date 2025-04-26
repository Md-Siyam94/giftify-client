import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { motion } from "motion/react"

const giftImages = [
  {
    src: 'https://i.ibb.co/4fs1JCr/gift1.jpg',
    title: 'Birthday Surprise Gift',
    user: '@surprisehub',
    description: 'A beautifully wrapped gift box perfect for birthday celebrations.'
  },
  {
    src: 'https://i.ibb.co/xKqZZ1ky/istockphoto-494859855-612x612.jpg',
    title: 'Wedding Gift Package',
    user: '@weddingbells',
    description: 'Elegant gift set designed for weddings and special occasions.'
  },
  {
    src: 'https://i.ibb.co/GxKLRZd/gift3.jpg',
    title: 'Holiday Gift Basket',
    user: '@holidaymagic',
    description: 'A festive basket full of treats and goodies for the holidays.'
  },
  {
    src: 'https://i.ibb.co/4PbqfC9/gift4.jpg',
    title: 'Corporate Gift Box',
    user: '@bizgifts',
    description: 'Professional gift package perfect for clients and colleagues.'
  },
  {
    src: 'https://i.ibb.co/tpRXMND4/93011.webp',
    title: 'Custom Handmade Gift',
    user: '@craftcorner',
    description: 'A personalized handmade item crafted with love and care.'
  },
];

const GiftGallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // below codes added by Hafiz
  const axiosPublic = useAxiosPublic();

  const { data: gifts = [], isLoading, isError } = useQuery({
    queryKey: ['gifts'],
    queryFn: async () => {
      const res = await axiosPublic.get('/giftify/gifts');
      return res.data;
    }
  });
  // above codes added by Hafiz


  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="min-h-screen container mx-auto p-5">
      <div className="bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white text-center md:py-10 py-6 md:mb-8 mb-3 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold">Gift Gallery</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-10">
        {gifts.map((image, index) => (
          <motion.div
          key={image._id}
          className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
          onClick={() => handleImageClick(index)}
          whileHover={{
            scale: 1.05,
            x: 10,    
            rotate: -2,
            
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          <img
            src={image.image}
            alt={image.title}
            className="w-full h-[320px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-white rounded-lg transition-opacity duration-300 text-center px-3">
            <p className="text-lg font-semibold">{image.title}</p>
            <p className="text-sm py-2">{image.description}</p>
          </div>
        </motion.div>
        ))}
      </div>
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={gifts.map((img) => ({ src: img.image, alt: img.title }))}
          index={currentIndex}
        />
      )}
    </div>
  );
};

export default GiftGallery;
