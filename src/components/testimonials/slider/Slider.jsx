import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const swiperRef = useRef(null);

    return (
        <div className="top-8  relative dark:bg-gray-900 min-h-screen flex items-center justify-center flex-col">
            <div className=""> 
                <h1 className="font-bold text-3xl text-gray-800 capitalize lg:text-3xl dark:text-white">
                    What learners are saying
                </h1>
            </div>

            {/* Swiper */}
            <div className="w-full max-w-6xl"> {/* wrapped swiper in a div to control spacing */}
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    modules={[Navigation]}
                >
                    {/* Slides */}
                    <SwiperSlide>
                        <section className=" dark:bg-gray-900">
                            <div className="max-w-6xl px-6 py-5 mx-auto">
                                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                                    <div className="absolute w-full bg-green-600 -z-10 md:h-96 rounded-2xl"></div>

                                    <div className="w-full p-6 bg-green-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                                        <div className="md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem]">
                                            <img
                                                className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:rounded-2xl"
                                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1470&q=80"
                                                alt="Client"
                                            />
                                        </div>
                                        <div className="mt-2 md:mx-6 text-white md:w-1/2">
                                            <div>
                                                <p className="text-xl font-medium tracking-tight">John Doe</p>
                                                <p className="text-green-200">CEO at TechCorp</p>
                                            </div>
                                            <p className="mt-4 text-lg leading-relaxed md:text-xl">
                                                “Amazing experience! Great support and an awesome product.”
                                            </p>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </section>
                    </SwiperSlide>

                    <SwiperSlide>
                        <section className=" dark:bg-gray-900">
                            <div className="max-w-6xl px-6 py-5 mx-auto">
                                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                                    <div className="absolute w-full bg-green-600 -z-10 md:h-96 rounded-2xl"></div>

                                    <div className="w-full p-6 bg-green-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                                        <div className="md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem]">
                                            <img
                                                className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:rounded-2xl"
                                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1470&q=80"
                                                alt="Client"
                                            />
                                        </div>
                                        <div className="mt-2 md:mx-6 text-white md:w-1/2">
                                            <div>
                                                <p className="text-xl font-medium tracking-tight">John Doe</p>
                                                <p className="text-green-200">CEO at TechCorp</p>
                                            </div>
                                            <p className="mt-4 text-lg leading-relaxed md:text-xl">
                                                “Amazing experience! Great support and an awesome product.”
                                            </p>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </section>
                    </SwiperSlide>

                    <SwiperSlide>
                        <section className=" dark:bg-gray-900">
                            <div className="max-w-6xl px-6 py-5 mx-auto">
                                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                                    <div className="absolute w-full bg-green-600 -z-10 md:h-96 rounded-2xl"></div>

                                    <div className="w-full p-6 bg-green-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                                        <div className="md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem]">
                                            <img
                                                className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:rounded-2xl"
                                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1470&q=80"
                                                alt="Client"
                                            />
                                        </div>
                                        <div className="mt-2 md:mx-6 text-white md:w-1/2">
                                            <div>
                                                <p className="text-xl font-medium tracking-tight">John Doe</p>
                                                <p className="text-green-200">CEO</p>
                                            </div>
                                            <p className="mt-4 text-lg leading-relaxed md:text-xl">
                                                “Amazing experience! Great support and an awesome product.”
                                            </p>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </section>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Custom navigation buttons */}
            <div className="flex items-center justify-between mt-6 md:justify-start absolute z-30 md:bottom-36   max-w-6xl mx-auto ml-44">
                {/* Left arrow */}
                <button
                    title="Previous"
                    className={`swiper-button-prev-custom p-2 text-red-500 transition-colors duration-300 border rounded-full hover:bg-red-400 ${
                        isBeginning ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isBeginning}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Right arrow */}
                <button
                    title="Next"
                    className={`swiper-button-next-custom p-2 text-red-500 transition-colors duration-300 border rounded-full md:mx-6 hover:bg-red-400 ${
                        isEnd ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isEnd}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Slider;
