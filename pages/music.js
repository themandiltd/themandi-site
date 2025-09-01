import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import CoverArt from "@/components/CoverArt";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="h-screen w-full overscroll-none overflow-hidde relative">
            <Navbar />
            <div className="w-full h-fit flex flex-end justify-end absolute items-end">
                <Link
                    href="/"
                    className="cursor-pointer hover:opacity-80 transition  mr-8 mt-8 h-fit"
                >
                    <Image
                        src="back.svg"
                        width={80}
                        height={100}
                        alt="back"
                        className=""
                    />
                </Link>
            </div>

            {/* Contents */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="w-full h-screen flex items-center justify-center"
            >
                {/* Gallery */}
                <div className="flex flex-row wrap w-full overflow-x-scroll justify-between items-center">
                    <CoverArt />
                    <CoverArt />
                    <CoverArt />
                    <CoverArt />
                    <CoverArt />
                </div>
            </motion.div>
            <Footer />
        </div>
    );
}
