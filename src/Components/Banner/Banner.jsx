// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "../../App.css";

// import required modules
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

export default function Banner() {
  const addLinks = [
    "https://www.youtube.com/embed/_h6aWfAhiis?autoplay=1&mute=1",
    "https://www.youtube.com/embed/b8PUpLsGSN8?autoplay=1&mute=1",
  ];
  return (
    <div className="w-full h-[450px]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{ delay: 10000 }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {addLinks.map((vedio, id) => (
          <SwiperSlide key={id}>
            <iframe
              width="1762"
              height="801"
              src={vedio}
              title="30 Second Nike Commercial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
