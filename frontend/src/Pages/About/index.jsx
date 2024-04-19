import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ShirtGreen from "../../../src/image/ShirtGreen.jpg";
import ManOne from "../../../src/image/ManOne.jpg";
import ManTwo from "../../../src/image/ManTwo.jpg";
import ManThree from "../../../src/image/ManThree.jpg";

export default function About() {
  return (
    <>
      {/* About header */}
      <div className="w-full h-48 mt-44 bg-mainGreen text-white text-center p-14">
        <h2 className="text-5xl font-bold">ABOUT US</h2>
        <Link to={"/"}>Home</Link>
        <span className="text-yellowColor"> &#8658; </span>
        <Link to={"/about"}>About</Link>
      </div>
      {/* About details */}
      <div className="container px-0 md:px-10 flex flex-col justify-around items-center xl:flex-row lg:flex-row md:flex-col">
        {/* image */}
        <img
          src={ShirtGreen}
          alt="green women shirt"
          className="w-80 mt-20 md:mt-20 lg:mt-0"
        />
        <div className="px-20 my-20 lg:my-36 md:my-20 text-center">
          <h2 className="text-center font-semibold text-3xl text-mainGreen mb-6">
            Best clothes shop
          </h2>
          <p className="text-justify mb-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <Link
            to={"/products/all-categories"}
            className="px-10 py-2 bg-mainGreen text-white hover:bg-yellowColor hover:text-black transition-colors font-bold"
          >
            Shop Now
          </Link>
        </div>
      </div>
      {/* store link */}
      <div className="w-full h-[400px] bg-[url('../src/image/aboutshop.jpg')] bg-top bg-no-repeat  bg-[length:100%_70%] md:bg-[length:100%_500px]">
        <div className="w-full h-[280px] md:h-[400px] bg-black/20 text-white text-center">
          <div className="p-20 md:p-40">
            <h6 className="font-semibold">Up To 50% Off</h6>
            <h2 className="text-5xl md:text-6xl font-bold mb-10">New Pants</h2>
            <Link
              to={"/products/all-categories"}
              className="px-10 py-2 bg-mainGreen text-white hover:bg-yellowColor hover:text-black transition-colors font-bold"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
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
