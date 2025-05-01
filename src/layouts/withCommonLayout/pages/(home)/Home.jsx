
import Hero from '../(home)/Hero';
import PropularCetegory from '../(home)/PropularCetegory';
import TrendingGifts from '../(home)/TrendingGifts';
import WhyChooseUs from '../(home)/WhyChooseUs';
import FaqSection from '../../../../components/LoadingSpinner/FaqSection/FaqSection';
import Testimonials from './Testimonials';
const Home = () => {
    return (
        <div className='space-y-5 lg:space-y-16 lg:mb-4'>
            <section>
                <Hero></Hero>
            </section>
            <section className='max-w-screen-xl mx-auto'>
                <PropularCetegory></PropularCetegory>
            </section>
            {/*Trending gifts section  */}
            <section id="trending" className='max-w-screen-xl mx-auto'>
                <TrendingGifts></TrendingGifts>
            </section>


            {/* Testimonials Section */}
            {/* <section className='max-w-screen-xl mx-auto'>
                <Testimonials></Testimonials>
            </section> */}


            {/* Why choose Us section */}
            <section className='max-w-screen-xl mx-auto'>
                <WhyChooseUs></WhyChooseUs>
            </section>
            {/* Faq Section */}
            <section className='max-w-screen-xl mx-auto'>
                <FaqSection></FaqSection>
            </section>
        </div>
    );
};

export default Home;