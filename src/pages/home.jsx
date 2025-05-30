import React, { Suspense, lazy } from "react";
import Loading from "../components/Loading";

const HeroSection = lazy(() => import("../components/home/heroSection"));
const About = lazy(() => import("../components/home/about"));
const Project = lazy(() => import("../components/home/project"));
const Skills = lazy(() => import("../components/home/skils"));
const Contact = lazy(() => import("../components/home/contact"));

const Home = () => {
    return (
        <div className="flex flex-col gap-y-20 py-32 overflow-x-hidden">
            <Suspense fallback={<Loading />}>
                <HeroSection />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <About />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <Project />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <Skills />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <Contact />
            </Suspense>
        </div>
    );
};

export default Home;
