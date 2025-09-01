import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Signup = ({ layloOpen, handleSignup }) => {
    return (
        <>
            <AnimatePresence>
                {layloOpen && (
                    <div className="w-full h-screen flex items-center p-4 backdrop-blur-xl justify-center z-60 bg-neutral-200/70 top-0 fixed">
                        <motion.div
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            animate={{
                                height: "fit-content",
                                opacity: 1,
                            }}
                            className="w-full max-w-lg p-4 absolute"
                        >
                            <iframe
                                src="https://laylo.com/themandi/profile/embed?theme=light"
                                width="100%"
                                height="250"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency="true"
                            ></iframe>
                            <div
                                className="mt-2 text-center text-black p-4 w-full cursor-pointer hover:underline"
                                onClick={handleSignup}
                            >
                                Close
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Signup;
