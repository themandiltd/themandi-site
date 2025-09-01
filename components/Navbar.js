import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="fixed z-20 p-4"
        >
            <Link
                href="/"
                className="cursor-pointer hover:opacity-60 transition shadow"
            >
                <Image src="them&i.svg" width={120} height={100} />
            </Link>
        </motion.div>
    );
};

export default Navbar;
