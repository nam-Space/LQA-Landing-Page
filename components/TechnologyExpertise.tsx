import Image from "next/image";
import React from "react";
import TechnologyImg from "../assets/img/LQA-Testing-Tech-Stack.png";

const TechnologyExpertise = () => {
    return (
        <div className="container py-[40px] lg:py-[60px]">
            <h1
                data-aos="fade-up"
                className="text-center mb-[30px] lg:mb-[64px]"
            >
                Technology Expertise
            </h1>
            <div data-aos="fade-up">
                <Image src={TechnologyImg} alt="Technology" />
            </div>
        </div>
    );
};

export default TechnologyExpertise;
