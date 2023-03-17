import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";

import { AiFillHome } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import Image from "next/image";
import Logo from "../../assets/img/Logos.gif";

const Footer = () => {
    return (
        <MDBFooter className="text-center text-lg-start text-muted bg-[#F4F4F5]">
            <section className="">
                <MDBContainer className="text-center text-md-start lg:pt-[60px] pt-[30px]">
                    <MDBRow className="mt-3 md:px-0 px-[20px]">
                        <MDBCol
                            md="6"
                            lg="4"
                            className="mx-auto mb-[50px] lg:mb-4 text-left md:px-0 md:text-center lg:text-left"
                        >
                            <h6 className=" text-uppercase fw-bold mb-4">
                                <MDBIcon icon="gem" className="me-3" />
                                Lotus Quality Assurance JSC.
                            </h6>
                            <p className="">
                                <AiFillHome className="text-[14px] inline-block mb-[3px] mr-[4px]" />
                                <span>
                                    Headquarter: 14th Fl, MD Complex, 68 Nguyen
                                    Co Thach Street, Nam Tu Liem District,
                                    Hanoi, Vietnam
                                </span>
                            </p>
                            <p className="">
                                <AiFillHome className="text-[14px] inline-block mb-[3px] mr-[4px]" />
                                <span>
                                    Japan Subsidiary: 2F, Industry & Trade
                                    Center, 2 Yamashitacho, Naka Ward, Yokohama,
                                    Kanagawa 231-0023, Japan
                                </span>
                            </p>
                            <p className="">
                                <AiFillHome className="text-[14px] inline-block mb-[3px] mr-[4px]" />
                                <span>
                                    US Subsidiary: 225787 Rawley Springs Dr,
                                    Chantilly, VA 20152
                                </span>
                            </p>
                        </MDBCol>

                        <MDBCol
                            md="6"
                            lg="4"
                            className="mx-auto mb-[50px] lg:mb-4 text-left md:px-0 md:text-center lg:text-left"
                        >
                            <h6 className=" text-uppercase fw-bold mb-4">
                                Contact details:
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">
                                    <BsFillTelephoneFill className="text-[14px] inline-block mb-[3px] mr-[4px]" />
                                    Tel: (+84) 24-6660-7474
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    <CiMail className="text-[14px] inline-block mb-[3px] mr-[4px]" />
                                    E-mail:{" "}
                                    <span className="underline underline-offset-1">
                                        hello@lqa.com.vn
                                    </span>
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    <span className="underline underline-offset-1">
                                        Linkedin
                                    </span>
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    <span className="underline underline-offset-1">
                                        Facebook
                                    </span>
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol
                            md="6"
                            lg="4"
                            className="mx-auto mb-[40px] lg:mb-4 text-left md:px-0 md:text-center lg:text-left"
                        >
                            <h6 className=" text-uppercase fw-bold mb-4">
                                About us:
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">
                                    About Us
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Blog
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Careers
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Privacy Policy
                                </a>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className="text-center  bg-white">
                <div className="container h-full flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center flex-col md:flex-row h-full">
                        <Image
                            src={Logo}
                            alt="logo"
                            className="h-[95px] w-auto"
                        />
                        <span className="text-[12px] tracking-[0.5px]">
                            Copyright © 2016 Lotus Quality Assurance
                        </span>
                    </div>
                    <p className="mb-[10px] md:mb-0">Towards Perfection</p>
                </div>
            </div>
        </MDBFooter>
    );
};

export default Footer;
