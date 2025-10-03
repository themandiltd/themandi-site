import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialBarRetro from "./SocialBarRetro";
import { motion } from "framer-motion";

const Footer = ({ layloOpen, handleSignup }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute z-10  bottom-0 w-full flex flex-col justify-between w-full"
        >
            <Image
                src="/logo.webp"
                className="w-fit ml-2 mb-2 hidden sm:block"
                width={50}
                height={50}
            />
            <SocialBarRetro handleSignup={handleSignup} layloOpen={layloOpen} />
        </motion.div>
    );
};

export default Footer;
