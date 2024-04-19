import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ManOne from "../../../../src/image/ManOne.jpg";
import ManTwo from "../../../../src/image/ManTwo.jpg";
import ManThree from "../../../../src/image/ManThree.jpg";

export default function CommentBox() {
  return (
    <>
      {/* Testimonial slider */}
      <div>
        <div className="text-center my-20">
          <h2 className="text-mainGreen font-bold text-2xl">Testimonial</h2>
          <p className="text-gray-700 text-sm">What our client say about us!</p>
        </div>
        {/* swiper */}
        <div className="my-10 xl:mt-16 lg:mt-16 md:mt-24 container">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper2"
          >
            <SwiperSlide className=" h-10 flex flex-col md:flex-col lg:flex-row xl:flex-row text-center mx-auto w-[10%] px-0 md:px-48 ">
              <img src={ManOne} className="mx-auto mb-6 md:mx-auto md:mb-6" />
              <div className="flex flex-col">
                <h3 className="mx-8 text-justify">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.Contrary to popular
                  belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old.
                </h3>
                <h5 className="mt-2 mx-8 text-left font-bold">Customer</h5>
                <h6 className="mt-2 mx-8 text-left font-light">Alex</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" h-10 flex flex-col md:flex-col lg:flex-row xl:flex-row text-center mx-auto w-[10%] px-0 md:px-48 ">
              <img src={ManTwo} className="mx-auto mb-6 md:mx-auto md:mb-6" />
              <div className="flex flex-col">
                <h3 className="mx-8 text-justify">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.Contrary to popular
                  belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old.
                </h3>
                <h5 className="mt-2 mx-8 text-left font-bold">Customer</h5>
                <h6 className="mt-2 mx-8 text-left font-light">John</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" h-10 flex flex-col md:flex-col lg:flex-row xl:flex-row text-center mx-auto w-[10%] px-0 md:px-48 ">
              <img src={ManThree} className="mx-auto mb-6 md:mx-auto md:mb-6" />
              <div className="flex flex-col">
                <h3 className="mx-8 text-justify">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.Contrary to popular
                  belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old.
                </h3>
                <h5 className="mt-2 mx-8 text-left font-bold">Customer</h5>
                <h6 className="mt-2 mx-8 text-left font-light">Mark</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
