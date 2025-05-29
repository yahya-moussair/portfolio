import React from 'react';
import HeroSection from '../components/home/heroSection';
import About from '../components/home/about';
import Project from '../components/home/project';
import Contact from '../components/home/contact';
import Skils from '../components/home/skils';

const Home = () => {
    return (
        <>
            <div className="pt-30">
                <HeroSection />
                <About />
                <Project />
                <Skils />
                <Contact />
            </div>
        </>
    );
};

export default Home;
