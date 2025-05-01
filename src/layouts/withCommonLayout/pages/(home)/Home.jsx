
import Hero from '../(home)/Hero';
import PropularCetegory from '../(home)/PropularCetegory';
import TrendingGifts from '../(home)/TrendingGifts';
import WhyChooseUs from '../(home)/WhyChooseUs';
import FaqSection from '../../../../components/LoadingSpinner/FaqSection/FaqSection';
import Testimonials from './Testimonials';
const Home = () => {
    return (
        <div className='space-y-5 lg:space-y-16 lg:mb-16'>
            <section>
                <Hero></Hero>
            </section>
            <section className='max-w-screen-xl mx-auto'>
                <PropularCetegory></PropularCetegory>
            </section>
            {/*Trending gifts section  */}
            <section className='max-w-screen-xl mx-auto'>
                <TrendingGifts></TrendingGifts>
            </section>
            {/* Testimonails Section */}
            <section className='max-w-screen-xl mx-auto'>
                <Testimonials></Testimonials>
            </section>
            {/* Why choose Us section */}
            <section className='max-w-screen-xl mx-auto'>
                <WhyChooseUs></WhyChooseUs>
            </section>
            {/* Faq Section */}
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;