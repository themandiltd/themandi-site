import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Menu = ({ clickFx }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="z-10 absolute w-full min-h-screen grid grid-rows-3"
            style={{ minHeight: "-webkit-fill-available" }}
        >
            <div className="row-container relative">
                <Link
                    href="/music"
                    className="cursor-pointer hover:opacity-80 transition  absolute left-1/3 top-1/2"
                >
                    <Image
                        src="music.svg"
                        width={120}
                        height={100}
                        alt="music"
                        className=""
                    />
                </Link>
            </div>
            <div className="row-container relative">
                <div className="cursor-not-allowed hover:opacity-80 transition  absolute sm:left-5/8  left-4/8 top-1/3">
                    <Image
                        src="shop.svg"
                        width={120}
                        height={100}
                        alt="shop; coming soon"
                        className=""
                    />
                    <div className="text-xs text-white text-center mt-2">
                        coming soon
                    </div>
                </div>
            </div>
            <div className="row-container relative">
                <div
                    className="cursor-pointer hover:opacity-80 transition  absolute sm:left-3/8 left-1/6 top-1/4"
                    onClick={clickFx}
                >
                    <Image
                        src="tour.svg"
                        width={160}
                        height={100}
                        alt="tour dates"
                        className=""
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Menu;
