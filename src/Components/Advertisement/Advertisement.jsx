// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "../../App.css";

export default function Advertisement() {
  const addImage = [
    "https://approval.studio/wp-content/uploads/2020/07/branding-story-of-adidas.jpg",
    "https://www.shape.com/thmb/9W8q3Mz0RU9ZT6C50-nz-wRoKDU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/serena_williams_fb1-6ef6d41f2df04df09adfdaeed2ea8b0c.jpg",
    "https://www.start.io/wp-content/uploads/2022/09/STR_Header-Blog-Post_Zara_V1.0-1.png",
    "https://i.ytimg.com/vi/zY3atcmLBag/maxresdefault.jpg",
    "https://static01.nyt.com/images/2009/06/30/business/30adco02-650.jpg?quality=75&auto=webp&disable=upscale",
    "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2023-03-01-at-2-05-47-am-63fef95c07432.png?crop=1xw:0.7748538011695907xh;center,top&resize=1200:*",
  ];

  return (
    <div>
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
        {addImage.map((img) => (
          <SwiperSlide>
            <img src={img} className="h-[400px]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
