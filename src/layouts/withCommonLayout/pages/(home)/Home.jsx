import React from 'react';
import TrendingGifts from './TrendingGifts';
import WhyChooseUs from './WhyChooseUs';
import Footer from '../../../../components/Footer';

const Home = () => {
    return (
        <>
          {/*Trending gifts section  */}
          <TrendingGifts></TrendingGifts>
          {/* Why choose Us section */}
          <WhyChooseUs></WhyChooseUs>
          {/* Footer section */}
          <Footer></Footer>
          
        </>
    );
};

export default Home;