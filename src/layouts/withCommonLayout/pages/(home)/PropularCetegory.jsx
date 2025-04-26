import { motion } from "framer-motion"; // ekhane correct import hobe
import React, { useEffect, useState } from 'react';
import PopularCetegoryCard from '../../../../components/PopularCategoryCard';

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
        <div className='py-16 px-5'>
            <h2 className='md:text-3xl text-2xl font-semibold text-center'>Popular Cetegories</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-6'>
                {
                    popularCetegory.map((category, index) => (
                        <motion.div
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
        </div>
    );
};

export default PropularCetegory;
