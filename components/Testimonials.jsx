import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import testimonialsData from '@/data/testimonialsData';
import { montserrat } from '@/context/fonts';

function Testimonials() {
    return (
        <section className='container mx-auto text-white rounded-md min-h-full flex flex-col md:px-16 py-12 px-6 lg:px-8 max-w-[84rem]'>
            <div className='flex flex-col justify-center items-center text-center px-5 gap-5'>
                <h2 className={`${montserrat.className} text-3xl font-semibold`}>Hear What Our Users Have to Say</h2>
                <p className='text-lg mb-12 text-center'>Discover how ProManager has transformed the productivity and success of our valued users.</p>
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        480: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 4, spaceBetween: 40 },
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {testimonialsData.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='w-full h-52 lg:h-72 p-5 md:text-lg text-base bg-slate-900 border-2 border-white'>
                                    <p className='italic'>&ldquo;{item.feedback}&rdquo;</p>
                                    <p className='font-medium text-pink-400 mt-2'>- {item.user}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials