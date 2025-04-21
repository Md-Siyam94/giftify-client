import React, { useEffect, useState } from 'react';
import PopularCetegoryCard from '../../../../components/PopularCategoryCard';

const PropularCetegory = () => {
    const [popularCetegory, setPopularCetegoy] = useState([])

useEffect(()=>{
    fetch("/popularCetegories.json")
    .then(res=> res.json())
    .then(data=> {
        setPopularCetegoy(data);
    })
    
},[])


    return (
        <div className='py-16 px-5 '>
            <h2 className='md:text-3xl text-2xl font-semibold text-center'>Popular Cetegories</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 '>
                {
                    popularCetegory.map(category=> <PopularCetegoryCard key={category?.id} cetegory={category}></PopularCetegoryCard>)
                }
            </div>
            
        </div>
    );
};

export default PropularCetegory;