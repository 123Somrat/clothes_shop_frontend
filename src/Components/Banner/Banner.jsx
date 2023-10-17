// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../App.css";

// import required modules
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <div className="w-full h-[450px]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{ delay: 3000 }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <iframe
            width="1762"
            height="801"
            src="https://www.youtube.com/embed/b8PUpLsGSN8?autoplay=1&mute=1"
            title="30 Second Nike Commercial"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
