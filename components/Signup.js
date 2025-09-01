import React from "react";
import { motion } from "framer-motion";

const Signup = ({ layloOpen, handleSignup }) => {
    return (
        <>
            {/* Overlay: always in the DOM; visibility toggled */}
            <motion.div
                className="fixed inset-0 z-60 flex items-center justify-center p-4
                   bg-white/90 backdrop-blur-xl"
                initial={false}
                animate={{ opacity: layloOpen ? 1 : 0 }}
                style={{ pointerEvents: layloOpen ? "auto" : "none" }}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    className="w-full max-w-lg p-4"
                    initial={false}
                    animate={{ opacity: layloOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <iframe
                        title="Laylo Signup"
                        src="https://laylo.com/themandi/profile/embed?theme=light"
                        width="100%"
                        height="250"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency={true}
                        loading="eager" // make sure it doesn’t defer
                    />
                    <div
                        className="mt-2 text-center text-[#0059FF] hover:underline p-4 w-full cursor-pointer hover:underline"
                        onClick={handleSignup}
                    >
                        Close
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default Signup;
