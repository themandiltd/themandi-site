import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const SocialBar = ({ handleSignup, layloOpen }) => {
    return (
        <>
            {/* Bar itself */}
            <div className="rounded-xl w-full glass text-white flex flex-col max-w-full md:max-w-[400px]">
                <div className="contents w-full flex flex-row justify-between items-center ">
                    <div
                        onClick={handleSignup}
                        className="p-4 flex flex-row gap-4 items-center justify-center transition hover:bg-[#fdfdfd24] rounded-xl cursor-pointer"
                    >
                        <div className=" whitespace-nowrap">
                            Stay up to date
                        </div>
                        <Image
                            src="/button.svg"
                            className=" transition cursor-pointer"
                            width={32}
                            height={32}
                        />
                    </div>
                    <div className="flex space-x-2 p-2 mr-2">
                        <a
                            href="https://www.tiktok.com"
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
                            href="https://www.youtube.com"
                            target="_blank"
                            className="icon-link"
                            rel="noopener noreferrer"
                        >
                            <img src="/youtube.svg" alt="YouTube" />
                        </a>
                        <a
                            href="https://www.instagram.com"
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

export default SocialBar;
