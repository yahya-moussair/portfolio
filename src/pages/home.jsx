import React, { Suspense, lazy } from "react";
import Loading from "../components/Loading";

const HeroSection = lazy(() => import("../components/home/heroSection"));
const About = lazy(() => import("../components/home/about"));
const Project = lazy(() => import("../components/home/project"));
const Skills = lazy(() => import("../components/home/skils"));
const Contact = lazy(() => import("../components/home/contact"));

const Home = () => {
    return (
        <div className="relative min-h-screen">
            {/* Main background gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
            
            {/* Animated gradient overlays */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse"></div>
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            {/* Grid overlay */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            
            {/* Content */}
            <div className="relative flex flex-col gap-y-20 py-32 overflow-x-hidden">
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
        </div>
    );
};

export default Home;
