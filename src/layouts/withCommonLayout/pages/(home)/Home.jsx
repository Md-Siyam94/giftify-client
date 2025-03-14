
import Hero from '../(home)/Hero';
import PropularCetegory from '../(home)/PropularCetegory';
import TrendingGifts from '../(home)/TrendingGifts';
import WhyChooseUs from '../(home)/WhyChooseUs';
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
          <section>
          <TrendingGifts></TrendingGifts>
          </section>
          {/* Why choose Us section */}
          <section>
          <WhyChooseUs></WhyChooseUs>
          </section>
          {/* Footer section */}
          <section>
          <Footer></Footer>
          </section>
        </div>




        
          
    );
};

export default Home;