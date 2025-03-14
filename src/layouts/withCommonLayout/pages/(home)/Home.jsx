
import Hero from './Hero';
import PropularCetegory from './PropularCetegory';
import TrendingGifts from './TrendingGifts';
import WhyChooseUs from './WhyChooseUs';
import Footer from '../../../../components/Footer';
const Home = () => {
    return (
        <div>
            <section>
                <Hero></Hero>
            </section>
            <section className='max-w-6xl mx-auto'>
                <PropularCetegory></PropularCetegory>
            </section>
              {/*Trending gifts section  */}
          <TrendingGifts></TrendingGifts>
          {/* Why choose Us section */}
          <WhyChooseUs></WhyChooseUs>
          {/* Footer section */}
          <Footer></Footer>
        </div>




    
    );
};

export default Home;