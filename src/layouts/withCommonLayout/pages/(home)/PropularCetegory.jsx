import { motion } from "framer-motion"; // ekhane correct import hobe
import React, { useEffect, useState } from 'react';
import PopularCetegoryCard from '../../../../components/PopularCategoryCard';
import { Link } from "react-router-dom";

const PropularCetegory = () => {
    const [popularCetegory, setPopularCetegoy] = useState([])

    useEffect(() => {
        fetch("/popularCetegories.json")
            .then(res => res.json())
            .then(data => {
                setPopularCetegoy(data);
            })
    }, [])

    return (
        <div className='py-8 md:py-12 lg:py-16'>
            <h2 className='md:text-3xl lg:text-4xl text-2xl font-semibold text-center'>Popular Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 items-stretch'>
                {
                    popularCetegory.map((category, index) => (
                        <motion.div
                            className="h-full"
                            key={category?.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: false, amount: 0.4 }}
                        >
                            <PopularCetegoryCard cetegory={category} />
                        </motion.div>
                    ))
                }
            </div>
            <div className="mt-8 md:mt-12 text-center">
                <Link to="/gift-catalog">
                    <button className="btn md:btn-wide text-p border-[#9333EA] hover:bg-[#7A22D1] hover:text-white">See More</button>
                </Link>
            </div>

        </div>
    );
};

export default PropularCetegory;
