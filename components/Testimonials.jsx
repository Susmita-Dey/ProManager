import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


function Testimonials() {
    return (
        <section className='text-pink-500 '>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, nulla provident placeat est necessitatibus ad, cupiditate laboriosam non id sit dicta blanditiis doloribus beatae eligendi ratione tenetur itaque neque dolorum. 1</SwiperSlide>
                <SwiperSlide>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, nulla provident placeat est necessitatibus ad, cupiditate laboriosam non id sit dicta blanditiis doloribus beatae eligendi ratione tenetur itaque neque dolorum. 2</SwiperSlide>
                <SwiperSlide>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, nulla provident placeat est necessitatibus ad, cupiditate laboriosam non id sit dicta blanditiis doloribus beatae eligendi ratione tenetur itaque neque dolorum. 3</SwiperSlide>
                <SwiperSlide>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, nulla provident placeat est necessitatibus ad, cupiditate laboriosam non id sit dicta blanditiis doloribus beatae eligendi ratione tenetur itaque neque dolorum. 4</SwiperSlide>
                <SwiperSlide>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, nulla provident placeat est necessitatibus ad, cupiditate laboriosam non id sit dicta blanditiis doloribus beatae eligendi ratione tenetur itaque neque dolorum. 5</SwiperSlide>
                <SwiperSlide>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, nulla provident placeat est necessitatibus ad, cupiditate laboriosam non id sit dicta blanditiis doloribus beatae eligendi ratione tenetur itaque neque dolorum. 6</SwiperSlide>
                <SwiperSlide>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, nulla provident placeat est necessitatibus ad, cupiditate laboriosam non id sit dicta blanditiis doloribus beatae eligendi ratione tenetur itaque neque dolorum. 7</SwiperSlide>
                <SwiperSlide>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, nulla provident placeat est necessitatibus ad, cupiditate laboriosam non id sit dicta blanditiis doloribus beatae eligendi ratione tenetur itaque neque dolorum. 8</SwiperSlide>
                <SwiperSlide>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, nulla provident placeat est necessitatibus ad, cupiditate laboriosam non id sit dicta blanditiis doloribus beatae eligendi ratione tenetur itaque neque dolorum. 9</SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonials