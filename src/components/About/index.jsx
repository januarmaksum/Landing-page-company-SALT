import { useRef } from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataAbout } from "../../data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function About() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationCurrent = useRef(null);

  return (
    <div className="container pt-[50px] xl:pt-[6rem] pb-[70px] px-12 xl:px-0 relative">
      <Swiper
        className="swiper-about"
        allowTouchMove={false}
        modules={[Pagination, Navigation]}
        pagination={{
          el: ".swiper-pagination-about",
          type: "fraction",
          formatFractionCurrent: function (number) {
            return "0" + number;
          },
          formatFractionTotal: function (number) {
            return "0" + number;
          },
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.params.pagination.el = paginationCurrent.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          1280: {
            slidesPerView: 3,
            spaceBetween: 40
          },
        }}
      >
        {dataAbout.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <div>
                <h2 className="text-blue-700 text-4xl font-medium leading-[30px] mb-6">
                  {item.title}
                </h2>
                <h3 className="text-black text-lg leading-[38px]">
                  {item.subTitle}
                </h3>
                <p className="text-gray-700 text-sm leading-6">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-between mt-14 items-center xl:hidden">
        <div className="swiper-pagination-about" ref={paginationCurrent} />
        <div className="flex swiper-navigation-about">
          <div
            className="w-[46px] h-[46px] bg-blue-800 flex items-center justify-center cursor-pointer"
            ref={navigationPrevRef}
          >
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.754441 7.29277C0.363917 7.6833 0.363917 8.31646 0.754441 8.70698L7.1184 15.0709C7.50893 15.4615 8.14209 15.4615 8.53262 15.0709C8.92314 14.6804 8.92314 14.0473 8.53262 13.6567L2.87576 7.99988L8.53262 2.34302C8.92314 1.9525 8.92314 1.31933 8.53262 0.92881C8.14209 0.538286 7.50893 0.538286 7.1184 0.92881L0.754441 7.29277ZM20.6442 8.99988C21.1965 8.99988 21.6442 8.55216 21.6442 7.99988C21.6442 7.44759 21.1965 6.99988 20.6442 6.99988L20.6442 8.99988ZM1.46155 8.99988L20.6442 8.99988L20.6442 6.99988L1.46155 6.99988L1.46155 8.99988Z"
                className="fill-white swiper-fill-prev"
              />
            </svg>
          </div>
          <div
            className="w-[46px] h-[46px] bg-blue-800 flex items-center justify-center cursor-pointer"
            ref={navigationNextRef}
          >
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2456 8.70698C21.6361 8.31646 21.6361 7.6833 21.2456 7.29277L14.8816 0.928811C14.4911 0.538286 13.8579 0.538286 13.4674 0.928811C13.0769 1.31934 13.0769 1.9525 13.4674 2.34302L19.1242 7.99988L13.4674 13.6567C13.0769 14.0473 13.0769 14.6804 13.4674 15.0709C13.8579 15.4615 14.4911 15.4615 14.8816 15.0709L21.2456 8.70698ZM1.35578 6.99988C0.80349 6.99988 0.355776 7.44759 0.355776 7.99988C0.355776 8.55216 0.80349 8.99988 1.35578 8.99988L1.35578 6.99988ZM20.5385 6.99988L1.35578 6.99988L1.35578 8.99988L20.5385 8.99988L20.5385 6.99988Z"
                className="fill-white swiper-fill-next"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
