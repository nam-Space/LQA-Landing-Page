import React from "react";
import { motion } from "framer-motion";

const Background = () => {
    const contentVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            x: "-50%",
        },
        visible: {
            opacity: 1,
            y: 0,
            x: "-50%",
            transition: {
                delay: 0.3,
                duration: 1,
            },
        },
    };

    const descVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            x: "-50%",
        },
        visible: {
            opacity: 1,
            y: 0,
            x: "-50%",
            transition: {
                delay: 0.8,
                duration: 1,
            },
        },
    };

    const btnVariants = {
        hidden: {
            x: 1000,
            opacity: 0,
        },
        visible: {
            opacity: 1,
            x: "-50%",
            transition: {
                delay: 1.2,
                type: "spring",
                duration: 0.8,
                bounce: 0.8,
                mass: 1,
            },
        },
    };

    return (
        <div>
            <div
                data-aos="fade-up"
                className="mt-[141px] bg-[url(../assets/img/background.jpg)] h-screen bg-center relative"
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-blue-500 opacity-70">
                    <motion.h3
                        variants={descVariants}
                        initial="hidden"
                        animate="visible"
                        className=" absolute  text-white bottom-[32%]  lg:bottom-[30%] translate-y-[100%] left-[50%] translate-x-[-50%] text-center text-[16px] md:text-[22px] lg:text-[28px] w-full md:w-[95%] lg:w-[90%]"
                    >
                        We are trusted by Infiniq, SQC, Perxtech, Verb Data,
                        Ascentis, Qualcomm, Kick ID
                    </motion.h3>
                </div>

                <motion.h1
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute text-white w-[90%] md:w-[70%] lg:w-[60%] bottom-[50%] translate-y-[100%] left-[50%] translate-x-[-50%] text-center text-[28px] md:text-[35px] lg:text-[46px] "
                >
                    Maximize ROI with Dedicated Vietnamese Engineers
                </motion.h1>
                <motion.button
                    variants={btnVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-semibold text-[#3958BD] absolute py-[14px] px-[40px] rounded-[25px] bg-white  bottom-[20%] translate-y-[100%] left-[50%] translate-x-[-50%] text-center"
                >
                    Contact Us
                </motion.button>
            </div>
        </div>
    );
};

export default Background;
