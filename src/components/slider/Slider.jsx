import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <div className='h-[calc(100vh-66px)] ]'>
            <Swiper
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper">

                <SwiperSlide>
                    <div className="relative h-full w-full  overflow-hidden">
                        <img
                            src={banner1}
                            alt="Language Learning"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent flex items-center justify-start px-10 text-white">
                            <div className="max-w-xl m-auto">
                                <h2 className="text-4xl font-bold mb-3">Unlock Global Communication</h2>
                                <p className="text-lg mb-4">
                                    Connect with expert tutors and learn languages from around the world.
                                </p>
                                <button className="btn btn-primary">Find Your Tutor</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative h-full w-full  overflow-hidden">
                        <img
                            src={banner2}
                            alt="Flexible Learning"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent flex items-center justify-start px-10 text-white">
                            <div className="max-w-xl m-auto">
                                <h2 className="text-4xl font-bold mb-3">Learn at Your Own Pace</h2>
                                <p className="text-lg mb-4">
                                    Choose flexible schedules and personalized learning paths with certified tutors.
                                </p>
                                <button className="btn btn-secondary">Explore Courses</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="relative h-full w-full  overflow-hidden">
                        <img
                            src={banner3}
                            alt="Language Mastery"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent flex items-center justify-start px-10 text-white">
                            <div className="max-w-xl  m-auto">
                                <h2 className="text-4xl font-bold mb-3">Master Any Language, Anytime</h2>
                                <p className="text-lg mb-4">
                                    Whether it’s English, Spanish, French, or more — our platform has you covered.
                                </p>
                                <button className="btn btn-accent">Get Started Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>


        </div>
    );
};

export default Slider;