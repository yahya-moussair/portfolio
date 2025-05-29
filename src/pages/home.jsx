import React from 'react';
import HeroSection from '../components/home/heroSection';
import About from '../components/home/about';
import Project from '../components/home/project';

const Home = () => {
    return (
        <>
            <div className="pt-30">
                <HeroSection />
                <About />
                <Project />
            </div>
        </>
    );
};

export default Home;
