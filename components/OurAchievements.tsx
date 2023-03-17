import Image from "next/image";
import React from "react";

import goldImg from "../assets/img/gold.png";
import istqbImg from "../assets/img/istqb.jpg";
import clutchImg from "../assets/img/clutch.jpg";
import outsoucingImg from "../assets/img/outsourcing.png";

const OurAchievements = () => {
    return (
        <div className="py-[40px] lg:py-[60px] container">
            <h1
                data-aos="fade-up"
                className="mb-[30px] lg:mb-[64px] text-[#135b95] text-center"
            >
                Our Achievements
            </h1>
            <div className="row g-5">
                <div
                    data-aos="fade-right"
                    className="col-md-6 col-lg-3 d-flex flex-col items-center"
                >
                    <div className="mb-[10px] lg:mb-[35px]">
                        <Image src={goldImg} alt="gold" />
                    </div>
                    <h5 className="text-center">
                        Top Vietnam IT Outsourcing Service 2021
                    </h5>
                </div>
                <div
                    data-aos="fade-right"
                    className="col-md-6 col-lg-3 d-flex flex-col items-center"
                >
                    <div className="mb-[10px] lg:mb-[35px]">
                        <Image src={istqbImg} alt="gold" />
                    </div>
                    <h5 className="text-center">ISTQB Silver Partner</h5>
                </div>
                <div
                    data-aos="fade-left"
                    className="col-md-6 col-lg-3 d-flex flex-col items-center"
                >
                    <div className="mb-[10px] lg:mb-[35px]">
                        <Image src={clutchImg} alt="gold" />
                    </div>
                    <h5 className="text-center">
                        #1 Software Testing Company In Vietnam
                    </h5>
                </div>
                <div
                    data-aos="fade-left"
                    className="col-md-6 col-lg-3 d-flex flex-col items-center"
                >
                    <div className="mb-[10px] lg:mb-[35px]">
                        <Image src={outsoucingImg} alt="gold" />
                    </div>
                    <h5 className="text-center">
                        Top Outsourcing Software Development Companies
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default OurAchievements;
