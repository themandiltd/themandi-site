"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Menu";
import { AnimatePresence, motion } from "framer-motion";
import TourWindow from "./TourWindow";

const Hero = ({ handleSignup, layloOpen, dates }) => {
    const [tourWindow, toggleTourWindow] = useState(false);

    const handleClick = () => {
        toggleTourWindow(!tourWindow);
    };

    return (
        <div className="w-full h-screen overscroll-none relative z-10">
            <Navbar />
            <AnimatePresence>
                {tourWindow && (
                    <TourWindow
                        clickFx={handleClick}
                        dates={dates}
                        handleSignup={handleSignup}
                    />
                )}
            </AnimatePresence>

            <Menu clickFx={handleClick} />

            <Footer handleSignup={handleSignup} layloOpen={layloOpen} />
            {/* Background videos */}
            <div className="video-container fixed top-0 w-full h-full flex flex-row z-0">
                <div className="col-left w-1/2 h-full ">
                    <video
                        src="/them&i_trimmed_1.mov"
                        autoPlay
                        muted
                        loop
                        className="h-full object-cover"
                    />
                </div>
                <div className="col-right w-1/2 h-full object-cover">
                    <video
                        src="/them&i_trimmed_2.mov"
                        autoPlay
                        muted
                        loop
                        className="h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
