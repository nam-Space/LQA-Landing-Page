import { BsFillPeopleFill, BsRocketTakeoffFill } from "react-icons/bs";
import React from "react";
import { GiProgression } from "react-icons/gi";

const WhyChooseUs = () => {
    return (
        <div className="py-[40px] lg:py-[60px] bg-[#145B96] text-white">
            <div className="container">
                <h1
                    data-aos="fade-up"
                    className="text-center mb-[30px] lg:mb-[64px]"
                >
                    Why Choose Us
                </h1>
                <div className="row g-5">
                    <div data-aos="fade-up" className="col-md-6 col-lg-4">
                        <div className="mb-[10px] lg:mb-[35px] flex justify-center">
                            <BsFillPeopleFill className="text-[42px] lg:text-[70px]" />
                        </div>
                        <h2 className="mb-[10px] lg:mb-[35px] text-center">
                            Human Resource
                        </h2>
                        <p>
                            LQA provides a high-quality talent pool with
                            professionals and experts who can use multiple
                            languages for better communication. The optimized
                            process of managing and training talents and the
                            abundant human resources from partners ensures a
                            quick team setup of up to 2 weeks.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="col-md-6 col-lg-4">
                        <div className="mb-[10px] lg:mb-[35px] flex justify-center">
                            <GiProgression className="text-[42px] lg:text-[70px]" />
                        </div>
                        <h2 className="mb-[10px] lg:mb-[35px] text-center">
                            Compliance with TCoE
                        </h2>
                        <p>
                            For every testing project, LQA applies the TCoE
                            Framework, which has clearly established goals,
                            well-defined processes, effective governance
                            mechanisms, multi-disciplined skill sets, and
                            efficient use of various tools and technology.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="col-md-6 col-lg-4">
                        <div className="mb-[10px] lg:mb-[35px] flex justify-center">
                            <BsRocketTakeoffFill className="text-[42px] lg:text-[70px]" />
                        </div>
                        <h2 className="mb-[10px] lg:mb-[35px] text-center">
                            Continuous Innovation
                        </h2>
                        <p>
                            We have different approaches for testing which are
                            trending, including automation testing, mobile labs,
                            etc. We also employ the newest tools for constant
                            innovation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
