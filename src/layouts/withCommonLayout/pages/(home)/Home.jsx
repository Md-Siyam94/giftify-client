
import Hero from './Hero';
import PropularCetegory from './PropularCetegory';

const Home = () => {
    return (
        <div>
            <section>
                <Hero></Hero>
            </section>
            <section className='max-w-6xl mx-auto'>
                <PropularCetegory></PropularCetegory>
            </section>
        </div>
    );
};

export default Home;