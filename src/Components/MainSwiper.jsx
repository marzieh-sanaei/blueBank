import Banner1 from "./../image/bnr.jpg";
import Banner1Mobile from "./../image/bnr-mobile.jpg";

import Banner2 from "./../image/bnnr1.jpg";
import Banner2Mobile from "./../image/bnr1-mobile.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="hidden md:block">
            <img src={Banner1} alt="Banner 1" className="rounded-[25px]" />
          </div>
          <div className="block md:hidden">
            <img
              src={Banner1Mobile}
              alt="Banner 1"
              className="rounded-[25px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hidden md:block">
            <img src={Banner2} alt="Banner 2" className="rounded-[25px]" />
          </div>
          <div className="block md:hidden">
            <img
              src={Banner2Mobile}
              alt="Banner 2"
              className="rounded-[25px]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
