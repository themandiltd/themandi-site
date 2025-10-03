// pages/music.js
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import CoverArt from "@/components/CoverArt";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

export default function MusicPage({}) {
    const music = [
        {
            title: "see me cry",
            url: "https://tr.ee/OckJxgf52W",
            coverArt: "/covers/seemycry.jpeg",
        },
        {
            title: "Song For Sarah",
            url: "https://tr.ee/qWpkS79j6U",
            coverArt: "/covers/sarah.jpeg",
        },
        {
            title: "One Night",
            url: "https://tr.ee/w-R5zUCFTS",
            coverArt: "/covers/onenight.webp",
        },
        {
            title: "Kitchen Flowers",
            url: "https://tr.ee/4AFjIz4ywl",
            coverArt: "/covers/Kitchen Flowers.webp",
        },
        {
            title: "My Tide/just a kiss",
            url: "https://tr.ee/rOF2eqs7tR",
            coverArt: "/covers/Just A Kiss & My Tide.webp",
        },
        {
            title: "Anchor",
            url: "https://tr.ee/oDaT2d2Xc7",
            coverArt: "/covers/Anchor.webp",
        },
        {
            title: "worship or love",
            url: "https://tr.ee/UPKaMGVEfB",
            coverArt: "/covers/worship or love .webp",
        },
        {
            title: "light blue linen",
            url: "https://tr.ee/iHq5QjAvua",
            coverArt: "/covers/light blue linen.webp",
        },
        {
            title: "A Kiss Dressed His Cheek",
            url: "https://tr.ee/pVdAC9dFs_",
            coverArt: "/covers/AKissDressedHisCheek.webp",
        },
        {
            title: "a tape for what i couldn't say",
            url: "https://open.spotify.com/track/0Cn0lp9mW3tSITZloy6AGS?si=18f569faa16f4ca4",
            coverArt: "/covers/a tape for what I couldn't say.webp",
        },
        {
            title: "Blue Catharsis",
            url: "https://open.spotify.com/track/4d2o5arnIPXjjdrivxexUp?si=652dff72ed9d462f",
            coverArt: "/covers/blue catharsis.webp",
        },
        {
            title: "bathed in grey",
            url: "https://open.spotify.com/track/1wolR3ygexMqWcqudrxe26?si=70adffab1c5d491b",
            coverArt: "/covers/bathed in grey.webp",
        },
        {
            title: "lover's grip",
            url: "https://open.spotify.com/track/1rnN6iMvBmNXmDzkD0c9Yp?si=a1ea84ff51eb44d5",
            coverArt: "/covers/Lover's Grip .webp",
        },
    ];

    return (
        <div className="md:min-h-screen min-h-dvh ios-full w-full overscroll-none overflow-hidden relative">
            <Navbar />

            {/* Back button */}
            <div className="w-full h-fit flex justify-end absolute items-end">
                <Link
                    href="/"
                    className="cursor-pointer hover:opacity-80 transition mr-8 mt-8 h-fit"
                >
                    <Image src="/back.svg" width={80} height={100} alt="back" />
                </Link>
            </div>

            {/* Contents */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full md:min-h-screen min-h-dvh ios-full flex items-center justify-center"
            >
                {/* Gallery */}
                <div className="flex flex-row flex-nowrap w-full overflow-x-auto gap-6 px-6 py-4">
                    {music.length === 0 ? (
                        <div className="w-full text-center opacity-70">
                            No music yet.
                        </div>
                    ) : (
                        music.map((m, i) => (
                            <CoverArt
                                key={i}
                                url={m.url}
                                src={m.coverArt}
                                title={m.title}
                            />
                        ))
                    )}
                </div>
            </motion.div>

            <Footer />
        </div>
    );
}
