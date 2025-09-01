import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const SocialBarRetro = ({ handleSignup, layloOpen }) => {
    return (
        <>
            {/* Bar itself */}
            <div className="w-full bg-white text-black flex flex-col  blur-[.5px]">
                <div className="contents w-full flex flex-row justify-between items-center ">
                    <div
                        onClick={handleSignup}
                        className="p-4 flex flex-row gap-4 items-center justify-center transition hover:bg-[#fdfdfd24] rounded-xl cursor-pointer"
                    >
                        <div className=" whitespace-nowrap hover:underline hover:text-blue-700">
                            Click here to stay up to date &rarr;
                        </div>
                    </div>
                    <div className="flex space-x-2 p-1 mr-2">
                        <a
                            href="https://www.tiktok.com/@themand_i"
                            className="icon-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/tiktok.svg"
                                className="text-white"
                                alt="TikTok"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UC2aVFjnjPPxRauu1B4vGkgQ"
                            target="_blank"
                            className="icon-link"
                            rel="noopener noreferrer"
                        >
                            <img src="/youtube.svg" alt="YouTube" />
                        </a>
                        <a
                            href="https://www.instagram.com/themandi/?hl=en"
                            target="_blank"
                            className="icon-link text-white"
                            rel="noopener noreferrer"
                        >
                            <img src="/instagram.svg" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Email caputre */}
            {/* <div className="absolute min-w-lg z-50 ">
                <iframe
                    src="https://laylo.com/themandi/profile/embed?theme=dark"
                    width="100%"
                    height="580"
                    frameborder="0"
                    scrolling="no"
                    allowtransparency="true"
                ></iframe>
            </div> */}
        </>
    );
};

export default SocialBarRetro;
