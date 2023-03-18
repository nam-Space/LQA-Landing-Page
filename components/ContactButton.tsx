import { FloatButton } from "antd";
import Image from "next/image";
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import santaImg from "../assets/img/santa.webp";

const ContactButton = () => {
    return (
        <>
            <div className="flex items-center justify-center w-[100px] md:w-[140px] fixed bottom-[100px] right-0 z-[100]">
                <Image src={santaImg} alt="" />
            </div>
            <FloatButton
                icon={<FaQuestionCircle />}
                type="primary"
                className="right-[21px] md:right-[40px] w-[60px] h-[60px]"
            />
        </>
    );
};

export default ContactButton;
