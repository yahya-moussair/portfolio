import React from 'react';
import HeroSection from '../components/home/heroSection';
import About from '../components/home/about';
import Project from '../components/home/project';
import Contact from '../components/home/contact';

const Home = () => {
    return (
        <>
            <div className="pt-30">
                <HeroSection />
                <About />
                <Project />
                <Contact />
            </div>
        </>
    );
};

export default Home;
