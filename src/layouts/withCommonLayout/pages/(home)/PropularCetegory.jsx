import React, { useEffect, useState } from 'react';
import PopularCetegoryCard from '../../../../components/PopularCetegoryCard';

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
        <div className='py-24  '>
            <h2 className='text-3xl font-semibold text-center'>Popular Cetegories</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 '>
                {
                    popularCetegory.map(category=> <PopularCetegoryCard key={category?.id} cetegory={category}></PopularCetegoryCard>)
                }
            </div>
            
        </div>
    );
};

export default PropularCetegory;