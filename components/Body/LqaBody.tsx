import React from "react";
import OurServices from "../OurServices";
import WhyChooseUs from "../WhyChooseUs";
import TechnologyExpertise from "../TechnologyExpertise";
import Business from "../Business";
import OurAchievements from "../OurAchievements";
import GetConsults from "../GetConsults";
import Discover from "../Discover";
import AboutUs from "../AboutUs";
import Background from "../Background";
import ContactButton from "../ContactButton";

const LotusBody = () => {
    return (
        <div className="overflow-hidden">
            <ContactButton />
            <Background />
            <OurServices />
            <WhyChooseUs />
            <TechnologyExpertise />
            <Business />
            <OurAchievements />
            <GetConsults />
            <Discover />
            <AboutUs />
        </div>
    );
};

export default LotusBody;
