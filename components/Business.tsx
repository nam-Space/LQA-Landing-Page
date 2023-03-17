import { Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import incubitImg from "../assets/img/incubit.png";
import Image from "next/image";
import juliaImg from "../assets/img/julia.png";
import baoVietImg from "../assets/img/baoviet.png";
import minhNgocImg from "../assets/img/minhngoc.png";
import aeLeanImg from "../assets/img/aelean.png";
import tatianaImg from "../assets/img/tatiana.png";
import advantageImg from "../assets/img/advantage.jpg";
import andyBuiImg from "../assets/img/andy-bui.png";
import { delay } from "framer-motion";

const Business = () => {
    return (
        <div className="bg-[#0E487D] py-[60px] lg:py-[120px]">
            <div className="container">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={25}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
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
                        992: {
                            slidesPerView: 3,
                        },
                    }}
                    data-aos="fade-up"
                >
                    <SwiperSlide>
                        <div className="h-[440px] bg-white flex flex-col items-center justify-center px-[30px] py-[40px] rounded-[10px]">
                            <Image
                                src={incubitImg}
                                alt="icon"
                                className="h-[54px] w-auto mb-[10px]"
                            />
                            <p className="text-[#74858d] line-h leading-[1.8rem]">
                                Quotations are fast, projects are done smoothly
                                and Lotus QA is very accommodating to our needs,
                                especially when it comes to quality. They
                                eagerly answered questions whenever they were
                                brought up.
                            </p>
                            <Image
                                src={juliaImg}
                                alt="julia"
                                className="w-[70px]"
                            />
                            <p className="mb-0 font-bold">JULIA RYAN</p>
                            <p className="text-[#74858d]">
                                Annotation Manager, Incubit
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[440px] bg-white flex flex-col items-center justify-center px-[30px] py-[40px] rounded-[10px]">
                            <Image
                                src={baoVietImg}
                                alt="icon"
                                className="h-[54px] w-auto mb-[10px]"
                            />
                            <p className="text-[#74858d] line-h leading-[1.8rem]">
                                I’m satisfied with Automation Testing service
                                provided quickly and flexibly by experienced
                                personnel of LQA. Whenever there is a problem to
                                be answered, LQA responds very quickly.
                            </p>
                            <Image
                                src={minhNgocImg}
                                alt="julia"
                                className="w-[70px]"
                            />
                            <p className="mb-0 font-bold">MINH NGOC</p>
                            <p className="text-[#74858d]">
                                Head of Technology Department, Bao Viet
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[440px] bg-white flex flex-col items-center justify-center px-[30px] py-[40px] rounded-[10px]">
                            <Image
                                src={aeLeanImg}
                                alt="icon"
                                className="h-[54px] w-auto mb-[10px]"
                            />
                            <p className="text-[#74858d] line-h leading-[1.8rem]">
                                We enjoy working with LQA because of high
                                quality of their work and their flexibility in
                                accommodating any new task. LQA have been one of
                                our best experiences when working with external
                                annotation teams
                            </p>
                            <Image
                                src={tatianaImg}
                                alt="julia"
                                className="w-[70px]"
                            />
                            <p className="mb-0 font-bold">TATIANA</p>
                            <p className="text-[#74858d]">
                                Project Manager, Daedalean
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[440px] bg-white flex flex-col items-center justify-center px-[30px] py-[40px] rounded-[10px]">
                            <Image
                                src={advantageImg}
                                alt="icon"
                                className="h-[54px] w-auto mb-[10px]"
                            />
                            <p className="text-[#74858d] line-h leading-[1.8rem]">
                                I strongly recommend LQA to companies looking
                                for software development, deployment and
                                software quality services. They will find
                                unrivaled quality and value.
                            </p>
                            <Image
                                src={andyBuiImg}
                                alt="julia"
                                className="w-[70px]"
                            />
                            <p className="mb-0 font-bold">ANDY BUI</p>
                            <p className="text-[#74858d]">
                                CTO, Advantages Digital Learning Solutions LLC
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[440px] bg-white flex flex-col items-center justify-center px-[30px] py-[40px] rounded-[10px]">
                            <Image
                                src={advantageImg}
                                alt="icon"
                                className="h-[54px] w-auto mb-[10px]"
                            />
                            <p className="text-[#74858d] line-h leading-[1.8rem]">
                                I strongly recommend LQA to companies looking
                                for software development, deployment and
                                software quality services. They will find
                                unrivaled quality and value.
                            </p>
                            <Image
                                src={andyBuiImg}
                                alt="julia"
                                className="w-[70px]"
                            />
                            <p className="mb-0 font-bold">ANDY BUI</p>
                            <p className="text-[#74858d]">
                                CTO, Advantages Digital Learning Solutions LLC
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[440px] bg-white flex flex-col items-center justify-center px-[30px] py-[40px] rounded-[10px]">
                            <Image
                                src={advantageImg}
                                alt="icon"
                                className="h-[54px] w-auto mb-[10px]"
                            />
                            <p className="text-[#74858d] line-h leading-[1.8rem]">
                                I strongly recommend LQA to companies looking
                                for software development, deployment and
                                software quality services. They will find
                                unrivaled quality and value.
                            </p>
                            <Image
                                src={andyBuiImg}
                                alt="julia"
                                className="w-[70px]"
                            />
                            <p className="mb-0 font-bold">ANDY BUI</p>
                            <p className="text-[#74858d]">
                                CTO, Advantages Digital Learning Solutions LLC
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[440px] bg-white flex flex-col items-center justify-center px-[30px] py-[40px] rounded-[10px]">
                            <Image
                                src={advantageImg}
                                alt="icon"
                                className="h-[54px] w-auto mb-[10px]"
                            />
                            <p className="text-[#74858d] line-h leading-[1.8rem]">
                                I strongly recommend LQA to companies looking
                                for software development, deployment and
                                software quality services. They will find
                                unrivaled quality and value.
                            </p>
                            <Image
                                src={andyBuiImg}
                                alt="julia"
                                className="w-[70px]"
                            />
                            <p className="mb-0 font-bold">ANDY BUI</p>
                            <p className="text-[#74858d]">
                                CTO, Advantages Digital Learning Solutions LLC
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[440px] bg-white flex flex-col items-center justify-center px-[30px] py-[40px] rounded-[10px]">
                            <Image
                                src={advantageImg}
                                alt="icon"
                                className="h-[54px] w-auto mb-[10px]"
                            />
                            <p className="text-[#74858d] line-h leading-[1.8rem]">
                                I strongly recommend LQA to companies looking
                                for software development, deployment and
                                software quality services. They will find
                                unrivaled quality and value.
                            </p>
                            <Image
                                src={andyBuiImg}
                                alt="julia"
                                className="w-[70px]"
                            />
                            <p className="mb-0 font-bold">ANDY BUI</p>
                            <p className="text-[#74858d]">
                                CTO, Advantages Digital Learning Solutions LLC
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Business;
