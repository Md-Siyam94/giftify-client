import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import AuthContext from "../../../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import useCart from "../../../../hooks/useCart";

const TrendingGifts = () => {

  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: gifts = [], isLoading, isError, refetch: refetchGifts } = useQuery({
    queryKey: ['gifts'],
    queryFn: async () => {
      const res = await axiosPublic.get('/giftify/gifts');
      return res.data;
    }
  });

  const [, refetchCart] = useCart();

  {/* <span style="background-color:#e6ffed"> */ }
  {/* Filter out only those gifts marked featured: true */ }
  const featuredGifts = gifts.filter(gift => gift.featured); // new  
  {/* </span> */ }

  // Apply filters when gifts loaded (you can remove this if you like)
  useEffect(() => {
    if (!gifts || gifts.length === 0) return;

    let result = [...gifts];
  }, [gifts]);


  const handleViewDetails = (gift) => {

    user ?

      Swal.fire({
        title: gift.title,
        imageUrl: gift.image,
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: gift.title,

        html: `
        <div class="space-y-2.5 text-left">
          <div class="text-3xl font-bold text-p">$${gift.price}</div>
          <div class="flex items-center justify-between">
            <span class="text-xs uppercase font-medium text-gray-800 bg-base-300 p-2">
              ${gift.category}
            </span>
            <span class="flex items-center gap-1">
              ${[...Array(5)].map(() => `
                <svg xmlns="http://www.w3.org/2000/svg"
                     class="h-5 w-5 fill-yellow-400"
                     viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 
                           1.42 8.29L12 19.771 4.58 23.886 6 15.596 
                           0 9.748l8.332-1.73z"/>
                </svg>
              `).join('')}
              <span class="text-gray-800 font-medium">(${gift.rating})</span>
            </span>
          </div>
          <p class="prose prose-sm text-gray-700">${gift.description}</p>
        </div>
      `,

        showCloseButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Add to Cart',
        focusConfirm: false,

        buttonsStyling: false,

        customClass: {
          popup: 'rounded-lg max-w-md',
          image: 'rounded-xl',
          confirmButton: 'btn bg-[#9333EA] hover:bg-[#7A22D1] text-white',
          closeButton: 'pl-3 pb-3',
        },

        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading(),

        preConfirm: async () => {
          const { _id, title, image, price, category, description, rating } = gift;
          const cartItem = {
            giftId: _id,
            email: user.email,
            title,
            image,
            price,
            category,
            description,
            rating,
            quantity: 1,
          };

          try {
            const res = await axiosPublic.post('/giftify/carts/create', cartItem);
            if (!res.data.success) {
              throw new Error('Could not add to cart');
            }
            return res.data;
          } catch (err) {
            Swal.showValidationMessage(`Request failed: ${err.message}`);
          }
        },
      })
        .then((result) => {
          if (result.isConfirmed) {
            refetchGifts();
            refetchCart();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Added to your Cart',
              showConfirmButton: false,
              timer: 1000,
            });
          }
        })
      :
      navigate('/signIn');
  };




  return (
    <>
      <div className="mx-3">
        <h2 className="md:text-3xl lg:text-4xl text-2xl font-semibold text-center mb-6">Trending Gifts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {featuredGifts.map((gift) => (
            <motion.div
              key={gift?._id}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {gift.featured && (
                <div className="badge bg-s text-white absolute top-2 left-2">
                  Featured
                </div>
              )}
              <img
                src={gift.image}
                alt={gift.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{gift.title}</h3>
                {/* <p className="text-gray-600 text-sm">{gift.description}</p> */}
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-lg font-bold text-purple-600">
                    ${gift.price}
                  </span>
                  <button className="btn btn-sm bg-[#9333EA] hover:bg-[#7A22D1] text-white"
                    onClick={() => handleViewDetails(gift)}
                  >
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
