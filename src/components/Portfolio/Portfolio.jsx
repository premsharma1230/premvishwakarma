import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "@/assets/img/sidebar.png";
import Ecommerce from "@/assets/img/ecommerce.png";
import HOC from "@/assets/img/hoc.png";
import MusicApp from "@/assets/img/musicapp.png"; 
import { themeContext } from "@/utils/Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}> Projects</span> 
      {/* Recent Projects */}
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        autoplay={{disableOnInteraction: false, delay: 1000, waitForTransition: true, infinite: true}}
        breakpoints={{
          480: {
            slidesPerView: 1,
            autoplay: {disableOnInteraction: false}
          },
          768: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        }}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar .src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce .src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp .src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC .src} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
