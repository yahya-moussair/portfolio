import React from 'react';
import HeroSection from '../components/home/heroSection';
import About from '../components/home/about';

const Home = () => {
    return (
        <>
            <div className="pt-30">
                <HeroSection />
                <About />
            </div>
        </>
    );
};

export default Home;
