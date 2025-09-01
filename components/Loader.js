import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Loader = ({ isLoading }) => {
    return (
        <div>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        exit={{ opacity: 0 }}
                        className="loader-container w-full h-screen bg-background flex items-center justify-center gap-4 flex-col"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Image src="/logo.png" width={150} height={300} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="text-xs"
                        >
                            Loading...
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Loader;
