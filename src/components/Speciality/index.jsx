import { useRef } from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataSpeciality } from "../../data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Speciality() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationCurrent = useRef(null);

  return (
    <div className="bg-blue-900 py-[35px] xl:py-20 px-[20px]">
      <div className="container bg-white py-[42px] px-[33px]">
        <h2 className="text-blue-700 text-2xl font-bold mb-3 xl:text-center">
          OUR SPECIALITY
        </h2>
        <p className="text-[#303030] text-sm font-light xl:w-3/5 xl:mx-auto xl:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
          sit amet congue aliquam.
        </p>

        <Swiper
          className="swiper-speciality mt-7"
          allowTouchMove={false}
          centeredSlides={true}
          spaceBetween={-120}
          initialSlide={1}
          modules={[Pagination, Navigation]}
          pagination={{
            el: ".swiper-pagination-speciality",
            clickable: true,
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
          {dataSpeciality.map((item) => {
            return (
              <SwiperSlide key={item.title}>
                <div className="text-center">
                  <img src={item.icon} alt={item.title} className="mx-auto" />
                  <h2 className="text-[#333333] text-sm xl:text-lg xl:mt-4 font-medium leading-[30px] mb-6 swiper-title-speciality">
                    {item.title}
                  </h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <p className="text-gray-700 text-sm leading-6 font-light text-center xl:w-3/6 xl:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
          sit amet congue aliquam.
        </p>
        <div className="flex justify-between mt-[40px] -mx-[20px] items-center swiper-navigation-speciality xl:hidden">
          <div
            className="w-[46px] h-[46px] flex items-center justify-center cursor-pointer"
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
                className="fill-[#3D46A2] swiper-fill-prev"
              />
            </svg>
          </div>
          <div>
            <div
              className="swiper-pagination-speciality"
              ref={paginationCurrent}
            />
          </div>
          <div
            className="w-[46px] h-[46px] flex items-center justify-center cursor-pointer"
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
                className="fill-[#3D46A2] swiper-fill-next"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
