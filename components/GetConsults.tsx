import React from "react";
import { Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";

const GetConsults = () => {
    const btnVariants = {
        hidden: {
            x: -1000,
            opacity: 0,
        },
        visible: {
            opacity: 1,
            x: "0",
            transition: {
                delay: 1.2,
                type: "spring",
                duration: 0.5,
                bounce: 0.8,
                mass: 1,
            },
        },
    };

    return (
        <div className="py-[40px] lg:py-[60px] bg-[#F2F2F2]">
            <div className="container flex flex-col items-center justify-center">
                <h1 data-aos="fade-up" className="text-[#145b96] text-center">
                    Get Consults From Our Experts
                </h1>
                <p data-aos="fade-up" className="text-center mb-[64px]">
                    Tell us your story and we will get back to you shortly with
                    our solutions!
                </p>
                <Form className="w-full md:w-[510px]">
                    <Form.Group
                        data-aos="fade-left"
                        className="mb-3"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Full Name*</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Type Your name*"
                        />
                    </Form.Group>

                    <Form.Group
                        data-aos="fade-left"
                        className="mb-3"
                        controlId="formBasicPassword"
                    >
                        <Form.Label>Business Email*</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Type Business Email*"
                        />
                    </Form.Group>
                    <Form.Group
                        data-aos="fade-left"
                        className="mb-3"
                        controlId="formBasicCompany"
                    >
                        <Form.Label>Company Name*</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Type Company Name*"
                        />
                    </Form.Group>
                    <Form.Group
                        data-aos="fade-left"
                        className="mb-3"
                        controlId="formBasicPhone"
                    >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Type Phone"
                        />
                    </Form.Group>
                    <Form.Group
                        data-aos="fade-left"
                        className="mb-3"
                        controlId="formBasicComment"
                    >
                        <Form.Label>Message*</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Send Us A Message*"
                            style={{ height: "100px" }}
                        />
                    </Form.Group>
                    <button
                        data-aos="fade-left"
                        className="bg-[#135B95] h-[40px] px-[14px] text-white rounded-[10px]"
                    >
                        SUBMIT
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default GetConsults;
