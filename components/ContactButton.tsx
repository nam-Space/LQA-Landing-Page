import { FloatButton } from "antd";
import Image from "next/image";
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import santaImg from "../assets/img/santa.webp";

const ContactButton = () => {
    return (
        <>
            <div className="w-[160px] fixed bottom-[100px] right-[-20px] z-[100]">
                <Image src={santaImg} alt="" />
            </div>
            <FloatButton
                icon={<FaQuestionCircle />}
                type="primary"
                className="right-[32px] w-[60px] h-[60px]"
            />
        </>
    );
};

export default ContactButton;
