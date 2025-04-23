import React from 'react';


const WhyChooseUs = () => {

    const features = [
        {
            id: 1,
            icon: "/package.png",
            title: "Instant Delivery",
            description: "Send gifts instantly or schedule for later",
        },
        {
            id: 2,
            icon: "/secure-payment.png",
            title: "Secure Payments",
            description: "100% secure payment processing",
        },
        {
            id: 3,
            icon: "/like.png",
            title: "Customer Love",
            description: "Rated 4.9/5 by our customers",
        },
    ];

    return (
        <>
            <div className="py-24 pb-44 px-10 container mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-center ">Why Choose Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 gap-6 text-center">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex flex-col items-center">
                            <div className="bg-purple-100 p-4 rounded-full">
                                <img className='h-10 w-10' src={feature.icon} alt="" />
                            </div>
                            <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default WhyChooseUs;