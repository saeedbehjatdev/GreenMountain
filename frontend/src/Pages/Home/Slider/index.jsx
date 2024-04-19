import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "autoprefixer";

import fetchApi from "../../../Utils/fetchApi";

import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css";
import "./style.css";

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 3000)}s`;
  };

  const [slide, setSlide] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchApi("sliders?populate=*");
      setSlide(res.data);
      console.log(data);
    })();
  }, []);

  const slideItems = slide?.map((e, index) => (
    <SwiperSlide key={index}>
      <img
        src={
          import.meta.env.VITE_BASE_URL +
          e?.attributes?.image?.data?.attributes?.url
        }
        alt="slider-img"
      />
    </SwiperSlide>
  ));
  return (
    <Swiper
      className="mySwiper select-none mt-16 lg:mt-[120px]"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {slideItems}
    </Swiper>
  );
}
