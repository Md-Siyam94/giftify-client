import React, { useContext } from 'react';
import { FaCartPlus, FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import AuthContext from '../../../../context/AuthContext/AuthContext';
import useCart from '../../../../hooks/useCart';

const GiftCatalogCard = ({ gift }) => {

    // console.log(gift.price);

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const [, refetch] = useCart();

    const handleViewDetails = (gift) => {
        Swal.fire({
            title: gift.title,
            imageUrl: gift.image,
            imageWidth: 400,
            imageHeight: 250,
            imageAlt: gift.title,

            // ── Styled details below the image ──
            html: `
      <div class="space-y-2.5 text-left">
        <!-- Price -->
        <div class="text-3xl font-bold text-p">
          $${gift.price}
        </div>

        <!-- Category & Rating -->
        <div class="flex items-center justify-between">
          <span class="text-xs uppercase font-medium text-gray-800 bg-base-300 p-2">
            ${gift.category}
          </span>
          <span class="flex items-center gap-1">
            ${[...Array(5)]
                    .map(
                        () => `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-yellow-400" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.42 8.29L12 19.771 4.58 23.886 6 15.596 0 9.748l8.332-1.73z"/>
                      </svg>`
                    )
                    .join('')}
            <span class="text-gray-800 font-medium">(${gift.rating})</span>
          </span>
        </div>

        <!-- Description -->
        <p class="prose prose-sm text-gray-700">
          ${gift.description}
        </p>
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
                // now this will stick:
                confirmButton: 'btn bg-[#9333EA] hover:bg-[#7A22D1] text-white',
                closeButton: 'pl-3 pb-3',
            },

            // 1) Mark preConfirm async so you can use await inside it
            preConfirm: async () => {
                try {
                    // 2) Build the payload
                    const { title, image, price, _id, category, description, rating } = gift;
                    const cartItem = {
                        giftId: _id,
                        email: user.email,
                        title,
                        image,
                        price,
                        category,
                        description,
                        rating,
                        quantity: 1
                    };

                    // 3) Await the API call
                    const res = await axiosPublic.post('/giftify/carts/create', cartItem);

                    // 4) Throw to trigger validationMessage if API says fail
                    if (!res.data.success) {
                        throw new Error('Could not add to cart');
                    }

                    // 5) Return the data so Swal knows it succeeded
                    return res.data;
                } catch (err) {
                    // 6) Stay open & show the error
                    Swal.showValidationMessage(`Request failed: ${err.message}`);
                }
            },
        }).then((result) => {
            if (result.isConfirmed) {
                // Only runs if preConfirm did _not_ throw and returned normally
                refetch();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Added to your Cart',
                    showConfirmButton: false,
                    timer: 1000,
                });
            }
        });
    };




    const handleAddToCart = (gift) => {
        const { title, image, price, _id, category, description, rating } = gift;
        if (user && user.email) {
            const cartItem = {
                giftId: _id,
                email: user.email,
                title,
                image,
                price,
                category,
                description,
                rating,
                quantity: 1
            }
            axiosPublic.post('/giftify/carts/create', cartItem)
                .then(res => {
                    if (res.data.success) {
                        refetch();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `Added to your Cart`,
                            showConfirmButton: false,
                            timer: 1000
                        });
                        // refetch();
                    }

                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // navigate('/signIn', { state: { from: location } })
                }
            });
        }
    };





    return (
        <div>
            <div
                className="card bg-base-100 shadow-lg hover:shadow-xl relative h-full transition-transform duration-150 transform hover:-translate-y-2.5 hover:border-2 hover:border-gray-200/95"
            >
                {gift.featured && (
                    <div className="badge bg-s text-white absolute top-2 left-2">
                        Featured
                    </div>
                )}
                <figure>
                    <img
                        src={gift.image}
                        alt={gift.title}
                        className="w-full h-36 object-contain cursor-pointer rounded-t-lg"
                        onClick={() => handleViewDetails(gift)}
                    />
                </figure>
                <div className="card-body flex-grow">
                    <h2 className="card-title text-gray-800">{gift.title}</h2>

                    <div className="flex justify-start gap-5 items-center mt-2">
                        <span className="text-base font-semibold text-black">
                            ${gift.price}
                        </span>
                        <span className="flex items-center gap-0.5 text-sm">
                            {[...Array(5)].map((_, idx) => (
                                <svg
                                    key={idx}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 fill-yellow-400"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.42 8.29L12 19.771 4.58 23.886 6 15.596 0 9.748l8.332-1.73z" />
                                </svg>
                            ))}
                            <span className="text-black/80">({gift.rating})</span>
                        </span>
                    </div>

                    {/* Icons always visible now */}
                    <div className="py-1.5 flex justify-between items-center">
                        <div className="tooltip" data-tip="View Details">
                            <button onClick={() => handleViewDetails(gift)}>
                                <div className="text-lg text-gray-700">
                                    <FaEye />
                                </div>
                            </button>
                        </div>

                        <div className="tooltip" data-tip="Add to Cart">
                            <div
                                className="text-lg text-s cursor-pointer"
                                onClick={() => handleAddToCart(gift)}
                            >
                                <FaCartPlus />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default GiftCatalogCard;