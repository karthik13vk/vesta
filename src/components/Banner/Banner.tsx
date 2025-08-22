import React from "react";
import { Pagination,  A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.scss";
import bannerImg from "./../../assets/images/homebanner.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const bannerImages = [
  { src: bannerImg, alt: "Banner 1" },
  { src: bannerImg, alt: "Banner 2" },
  { src: bannerImg, alt: "Banner 3" },
];

export const Banner: React.FC = () => {
  return (
    <div className="homebanner-section">
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[ Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className=""
      >
        {bannerImages.map((banner, index) => (
          <SwiperSlide key={index} className="">
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};
