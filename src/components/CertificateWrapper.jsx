import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { certificates } from "../core/data";

function CertificateWrapper() {
  let swiperInstance = null;
  return (
    <section id="certificate" className="mt-10 scroll-mt-6">
      <div className="w-full flex flex-col">
        <div className="space-y-2 flex items-center justify-between">
          <h2
            className="font-bold text-3xl md:text-4xl dark:text-white"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            Certificate
          </h2>
          <div className="space-x-3 mr-2 hidden md:block">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="btn bg-[#555555] rounded-full p-3 text-white hover:bg-[#444444] hover:scale-[1.03] transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="btn bg-[#555555] rounded-full p-3 text-white hover:bg-[#444444] hover:scale-[1.03] transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-10">
          <Swiper
            onSwiper={(swiper) => (swiperInstance = swiper)}
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView={4}
            allowSlideNext={true}
            allowSlidePrev={true}
            loop={true}
            breakpoints={{
              360: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
          >
            {certificates.map((certificate) => {
              return (
                <SwiperSlide
                  key={certificate.id}
                  className="flex flex-col gap-4 justify-center items-center shadow-lg rounded-lg group relative transition-all cursor-pointer"
                >
                  <div class="absolute rounded-lg group-hover:inset-0 bg-gradient-to-b from-[rgba(0,0,0,.54)] to-[rgba(0,0,0,.54)] group-hover:transition group-hover:duration-1000 group-hover:ease-in"></div>
                  <h3 className="absolute hidden group-hover:block text-white text-center px-3">
                    {certificate.title}
                  </h3>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={certificate.image}
                    alt={certificate.title}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default CertificateWrapper;
