import React from 'react';

const GiftCatalogCard = ({ gift }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl relative">
                {gift.featured && (
                    <div className="badge btn-p text-white absolute top-2 left-2">Featured</div>
                )}
                <figure>
                    <img src={gift.image} alt={gift.title} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{gift.title}</h2>
                    <p className="text-gray-500">{gift.description}</p>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-lg font-bold">${gift.price}</span>
                        <span className="flex items-center gap-1 text-sm text-black">
                            ⭐ {gift.rating} ({gift.reviews})
                        </span>
                    </div>
                    <button className="btn btn-p text-white mt-3">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default GiftCatalogCard;