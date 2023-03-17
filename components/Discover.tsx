import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import cyberImg from "../assets/img/cyber-security.jpg";
import threeDImg from "../assets/img/3D-enabled-Perception.jpg";
import biometricImg from "../assets/img/biometric-security.jpg";
import qualityCrossImg from "../assets/img/data-labeling-quality-cross-check.jpg";
import customerTrustImg from "../assets/img/fintech-challenges-customer-trust.jpg";
import LackOfHumanImg from "../assets/img/lack-of-human-touch.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Discover = () => {
    return (
        <div className="bg-[#DEE3E6] py-[40px] lg:py-[60px]">
            <div className="container">
                <h1
                    data-aos="fade-up"
                    className="text-center text-[#1e73be] mb-[30px] lg:mb-[64px]"
                >
                    Discover Our Articles
                </h1>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={2}
                    slidesPerGroup={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                    data-aos="fade-up"
                >
                    <SwiperSlide>
                        <div className="bg-white flex flex-col-reverse justify-between h-[400px] xl:flex-row items-center">
                            <div className="px-[20px] pb-[20px] xl:px-[30px] xl:pb-[30px]">
                                <h5 className="font-bold">
                                    Vietnam Software Outsourcing: Why is Vietnam
                                    your next destination?
                                </h5>
                                <p className="hidden lg:block text-[#767f8b] mb-[15px] xl:mb-[25px]">
                                    Vietnam software outsourcing stands out as
                                    the must-try solution for any business
                                    looking for top-notch IT outsourcing
                                    services.
                                </p>
                                <button className="bg-[#135B95] py-[12px] text-[12px] font-bold tracking-[0.5px] px-[24px] text-white rounded-[10px]">
                                    READ MORE
                                </button>
                            </div>
                            <Image
                                src={cyberImg}
                                alt="IT"
                                className="h-[240px] lg:h-[180px] w-full xl:h-[400px] xl:w-[232px] object-cover"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white flex flex-col-reverse justify-between h-[400px] xl:flex-row items-center">
                            <div className="px-[20px] pb-[20px] xl:px-[30px] xl:pb-[30px]">
                                <h5 className="font-bold">
                                    What to do when choosing an IT Outsourcing
                                    Provider for your firm?
                                </h5>
                                <p className="hidden lg:block text-[#767f8b] mb-[15px] xl:mb-[25px]">
                                    The benefits of IT outsourcing are pivotal
                                    to the business, but choosing a capable IT
                                    Outsourcing provider with is no easy task.
                                </p>
                                <button className="bg-[#135B95] py-[12px] text-[12px] font-bold tracking-[0.5px] px-[24px] text-white rounded-[10px]">
                                    READ MORE
                                </button>
                            </div>
                            <Image
                                src={LackOfHumanImg}
                                alt="IT"
                                className="h-[240px] lg:h-[180px] w-full xl:h-[400px] xl:w-[232px] object-cover"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white flex flex-col-reverse justify-between h-[400px] xl:flex-row items-center">
                            <div className="px-[20px] pb-[20px] xl:px-[30px] xl:pb-[30px]">
                                <h5 className="font-bold">
                                    Top challenges in IT recruitment faced by
                                    tech giants
                                </h5>
                                <p className="hidden lg:block text-[#767f8b] mb-[15px] xl:mb-[25px]">
                                    Despite of many attractive talent
                                    acquisition policies, 75% of enterprises are
                                    still struggling with talent shortage in key
                                    IT positions.
                                </p>
                                <button className="bg-[#135B95] py-[12px] text-[12px] font-bold tracking-[0.5px] px-[24px] text-white rounded-[10px]">
                                    READ MORE
                                </button>
                            </div>
                            <Image
                                src={biometricImg}
                                alt="IT"
                                className="h-[240px] lg:h-[180px] w-full xl:h-[400px] xl:w-[232px] object-cover"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white flex flex-col-reverse justify-between h-[400px] xl:flex-row items-center">
                            <div className="px-[20px] pb-[20px] xl:px-[30px] xl:pb-[30px]">
                                <h5 className="font-bold">
                                    Why is Auto Data Labeling the future?
                                </h5>
                                <p className="hidden lg:block text-[#767f8b] mb-[15px] xl:mb-[25px]">
                                    As the Manual Data Labeling takes hours to
                                    annotate one dataset, the Auto Labeling
                                    technology now proposes a simpler, faster
                                    and more advanced way of processing data
                                </p>
                                <button className="bg-[#135B95] py-[12px] text-[12px] font-bold tracking-[0.5px] px-[24px] text-white rounded-[10px]">
                                    READ MORE
                                </button>
                            </div>
                            <Image
                                src={threeDImg}
                                alt="IT"
                                className="h-[240px] lg:h-[180px] w-full xl:h-[400px] xl:w-[232px] object-cover"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white flex flex-col-reverse justify-between h-[400px] xl:flex-row items-center">
                            <div className="px-[20px] pb-[20px] xl:px-[30px] xl:pb-[30px]">
                                <h5 className="font-bold">
                                    9 EdTech trends you need to know in 2021
                                </h5>
                                <p className="hidden lg:block text-[#767f8b] mb-[15px] xl:mb-[25px]">
                                    These 9 trends will shape the Edtech Market
                                    in the next 3-years and can be a guide to
                                    adapt with the rapid innovation in EdTech
                                    development
                                </p>
                                <button className="bg-[#135B95] py-[12px] text-[12px] font-bold tracking-[0.5px] px-[24px] text-white rounded-[10px]">
                                    READ MORE
                                </button>
                            </div>
                            <Image
                                src={qualityCrossImg}
                                alt="IT"
                                className="h-[240px] lg:h-[180px] w-full xl:h-[400px] xl:w-[232px] object-cover"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white flex flex-col-reverse justify-between h-[400px] xl:flex-row items-center">
                            <div className="px-[20px] pb-[20px] xl:px-[30px] xl:pb-[30px]">
                                <h5 className="font-bold">
                                    Essential guide for setting up an Offshore
                                    Development Center
                                </h5>
                                <p className="hidden lg:block text-[#767f8b] mb-[15px] xl:mb-[25px]">
                                    There is no fixed way to efficiently set up
                                    and run Offshore Development Center, but
                                    these guide can help you to get out of many
                                    basic mistakes.
                                </p>
                                <button className="bg-[#135B95] py-[12px] text-[12px] font-bold tracking-[0.5px] px-[24px] text-white rounded-[10px]">
                                    READ MORE
                                </button>
                            </div>
                            <Image
                                src={customerTrustImg}
                                alt="IT"
                                className="h-[240px] lg:h-[180px] w-full xl:h-[400px] xl:w-[232px] object-cover"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Discover;
