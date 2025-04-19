import React from 'react';
import { FaCartPlus, FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

const GiftCatalogCard = ({ gift }) => {

    // console.log(gift.price);

    const handleViewDetails = (gift) => {
        Swal.fire({
            title: gift.title,
            imageUrl: gift.image,
            imageWidth: 400,
            imageHeight: 250,
            imageAlt: gift.title,
            html: `
                <div class="text-left ml-10 space-y-1.5">
                    <p><strong>Category:</strong> ${gift.category}</p>
                    <p><strong>Price:</strong> $${gift.price}</p>
                    <p><strong>Description:</strong> ${gift.description}</p>
                    <p><strong>Rating:</strong> ${gift.rating}</p>
                </div>
            `,
            showCloseButton: true,
        });
    };






    return (
        <div>
            <div className="card bg-base-100 shadow-lg relative h-full">
                {gift.featured && (
                    <div className="badge bg-s text-white absolute top-2 left-2">Featured</div>
                )}
                <figure>
                    <img src={gift.image} alt={gift.title} className="w-full h-36 object-cover" />
                </figure>
                <div className="card-body flex-grow">
                    <h2 className="card-title text-gray-800">{gift.title}</h2>
                    {/* <p className="text-gray-500">{gift.description}</p> */}
                    <div className="flex justify-start gap-5 items-center mt-2">
                        <span className="text-base font-semibold text-black">$ {gift.price}</span>
                        <span className="flex items-center gap-0.5 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.42 8.29L12 19.771 4.58 23.886 6 15.596 0 9.748l8.332-1.73z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.42 8.29L12 19.771 4.58 23.886 6 15.596 0 9.748l8.332-1.73z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.42 8.29L12 19.771 4.58 23.886 6 15.596 0 9.748l8.332-1.73z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.42 8.29L12 19.771 4.58 23.886 6 15.596 0 9.748l8.332-1.73z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-yellow-400" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.42 8.29L12 19.771 4.58 23.886 6 15.596 0 9.748l8.332-1.73z" />
                            </svg>
                            <span className="text-black/80">({gift.rating})</span>
                            {/* <span className="text-black">{gift.rating} ({gift.reviews})</span> */}
                        </span>


                    </div>
                    {/* <button className="btn btn-p text-white mt-3">Add to Cart</button> */}

                    <div className="py-1.5 flex justify-between items-center">


                        {/* <div className="text-gray-700 text-lg cursor-pointer">
                            <FaEye />
                        </div> */}

                        <button className="" onClick={() => handleViewDetails(gift)}>
                            <div className="text-lg text-gray-700"><FaEye /></div>
                        </button>

                        <div className="text-lg text-s cursor-pointer">
                            <FaCartPlus />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GiftCatalogCard;