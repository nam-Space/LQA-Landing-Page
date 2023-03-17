import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsCheckSquare } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";

const OurServices = () => {
    return (
        <div className="container">
            <div className="py-[40px] lg:py-[60px]">
                <h1
                    data-aos="fade-up"
                    className="text-[#145B96] text-center mb-[30px]  lg:mb-[64px]"
                >
                    Our Services
                </h1>
                <div className="row g-5">
                    <div data-aos="fade-up" className="col-md-6 col-lg-4">
                        <div className="flex justify-center">
                            <FaInstagram className="text-[42px] lg:text-[70px] text-[#5472D2] mb-[10px] lg:mb-[35px]" />
                        </div>
                        <h2 className="mb-[12px] lg:mb-[35px] text-center">
                            AI Data Annotation
                        </h2>
                        <p className="mb-0 text-left text-[#72777d]">
                            Our resourceful Talent Pool assures quick team setup
                            and flexible response upon requests. AI data
                            processing of many data types is performed and
                            monitored in accordance with strict QA policy.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="col-md-6 col-lg-4">
                        <div className="flex justify-center">
                            <BsCheckSquare className="text-[42px] lg:text-[70px] text-[#5472D2] mb-[10px] lg:mb-[35px]" />
                        </div>
                        <h2 className="mb-[12px] lg:mb-[35px]  text-center">
                            Software Testing
                        </h2>
                        <p className="mb-0 text-left text-[#72777d]">
                            Through good communication and collaboration, LQA
                            devises an innovative testing approach in compliance
                            with International Quality Standard for the best
                            services.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="col-md-6 col-lg-4">
                        <div className="flex justify-center">
                            <MdDeveloperMode className="text-[42px] lg:text-[70px] text-[#5472D2] mb-[10px] lg:mb-[35px]" />
                        </div>
                        <h2 className="mb-[12px] lg:mb-[35px]  text-center">
                            Software Development
                        </h2>
                        <p className="mb-0 text-left text-[#72777d]">
                            With competency in different languages and talented
                            developers, LQA is trusted by global companies in
                            applying innovative approaches to create higher
                            business values.
                        </p>
                    </div>
                </div>
                <div className="mt-[40px] lg:mt-[60px] text-center">
                    <button
                        data-aos="fade-up"
                        className="bg-[#145B96] h-[50px] w-[136px] rounded-[5px] text-white"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
