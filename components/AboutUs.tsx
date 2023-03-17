import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const AboutUs = () => {
    return (
        <div className="container lg:py-[60px] py-[40px] flex flex-col items-center justify-center ">
            <h1
                data-aos="fade-up"
                className="text-[#135b95] text-center mb-[30px] lg:mb-[64px]"
            >
                About Us
            </h1>
            <div className="w-[90%] md:w-[50%] mb-[35px]">
                <p data-aos="fade-right">
                    LQA – Lotus Quality Assurance is an emerging IT Outsourcing
                    Company in Vietnam.
                </p>
                <p data-aos="fade-right">
                    We provide high-quality end-to-end IT services including:
                </p>
                <p data-aos="fade-right" className="flex items-center">
                    <FaChevronCircleRight className="text-[#3B8CED] mr-[10px] text-[14px] ml-[20px]" />
                    Software Testing & Quality Assurance Service
                </p>
                <p data-aos="fade-right" className="flex items-center">
                    <FaChevronCircleRight className="text-[#3B8CED] mr-[10px] text-[14px] ml-[20px]" />
                    Software Development
                </p>
                <p data-aos="fade-right" className="flex items-center">
                    <FaChevronCircleRight className="text-[#3B8CED] mr-[10px] text-[14px] ml-[20px]" />
                    AI Data Processing
                </p>
                <p data-aos="fade-right">
                    Lotus QA has always pursued the mission of elevating and
                    connecting Vietnamese IT engineers to international clients,
                    hence contributing to affirming Vietnam’s position on the
                    world’s technology map.
                </p>
            </div>
            <button
                data-aos="fade-right"
                className="bg-[#135B95] h-[40px] px-[14px] text-white rounded-[10px] flex items-center justify-center"
            >
                <AiOutlineArrowRight className="mr-[5px]" />
                Learn More
            </button>
        </div>
    );
};

export default AboutUs;
