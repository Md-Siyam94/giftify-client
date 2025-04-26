import React from 'react';
import { motion } from "framer-motion"; 

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
        <div className="py-16 px-5 container mx-auto">
            <h2 className="md:text-3xl text-2xl font-semibold text-center mb-6">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {features.map((feature, index) => (
                    <motion.div 
                        key={feature.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.4,
                            type: "spring",
                            stiffness: 100,
                            damping: 12,
                        }}
                        viewport={{ once: false, amount: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <div className="bg-purple-100 p-4 rounded-full">
                            <img className='h-10 w-10' src={feature.icon} alt={feature.title} />
                        </div>
                        <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
