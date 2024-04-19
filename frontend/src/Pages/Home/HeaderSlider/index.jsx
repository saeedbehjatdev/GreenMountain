import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Summer from "../../../image/Summer.png";
import ManCollection from "../../../image/ManCollection.png";
import Green from "../../../image/Green.png";
export default function HeaderSlider() {
  return (
    <>
      <div className="xl:mt-16 lg:mt-16 md:mt-24 mt-28">
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
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Summer} className="img-swiper" alt="summer collection" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ManCollection} className="" alt="man clothe collection" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Green} className="" alt="green mountain" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
