
import Hero from '../(home)/Hero';
import PropularCetegory from '../(home)/PropularCetegory';
import TrendingGifts from '../(home)/TrendingGifts';
import WhyChooseUs from '../(home)/WhyChooseUs';
import Testimonials from './Testimonials';
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
          <section>
          <TrendingGifts></TrendingGifts>
          </section>
          {/* Testimonails Section */}
          <Testimonials></Testimonials>
              {/* Why choose Us section */}
          <section>
          <WhyChooseUs></WhyChooseUs>
          </section>
        </div>
    );
};

export default Home;