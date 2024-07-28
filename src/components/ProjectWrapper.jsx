import { projects } from "../core/data";
import Project from "./Project";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

function ProjectWrapper() {
  let swiperInstance = null;
  return (
    <section id="projects" className="mt-32 scroll-mt-6">
      <div className="w-full flex items-center justify-between relative">
        <div className="space-y-2">
          <h2
            className="font-bold text-3xl md:text-4xl"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            Projects
          </h2>
          <p
            className="text-neutral-500 text-sm md:text-base"
            data-aos="fade"
            data-aos-duration="500"
          >
            Hasil pemecahan masalah dengan Coding yang membuahkan hasil Project
          </p>
        </div>
        <div className="space-x-3 mr-2 absolute md:relative top-0 right-0">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="bg-[#555555] rounded-full p-1 md:p-2 text-white hover:bg-[#444444] hover:scale-[1.03] transition-all"
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
            className="bg-[#555555] rounded-full p-1 md:p-2 text-white hover:bg-[#444444] hover:scale-[1.03] transition-all"
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
      <Swiper
        onSwiper={(swiper) => (swiperInstance = swiper)}
        modules={[Autoplay]}
        className="w-full py-6 md:-mx-2 px-2"
        spaceBetween={32}
        slidesPerView={2}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        allowSlideNext={true}
        allowSlidePrev={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide
            className="w-full h-auto flex flex-col rounded-xl shadow-md overflow-hidden outline outline-1 outline-[#bababa55] hover:!scale-[1.01] hover:shadow-lg transition-all duration-300"
            key={index}
          >
            <Project
              img={project.img}
              title={project.title}
              desc={project.desc}
              techs={project.techs}
              source={project.source}
              demo={project.demo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProjectWrapper;
