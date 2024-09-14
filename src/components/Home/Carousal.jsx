import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay"; 
import "../../styles/pagination.css"
import { FreeMode, Pagination, Autoplay } from "swiper/modules"; 

import { ServiceData } from "./constant";

const Carousal = () => {
  const lexend={
    fontFamily:'Lexend Giga, sans-serif',
  };
  const Outfit={
    fontFamily:'Outfit, sans-serif',
  };
  return (
   
    <>
   
    <div className="flex items-center justify-center flex-col h-[700px] bg-black">
    <h1 className=" text-center text-3xl py-6 mb-11"style={lexend}>INVITED SPEAKERS AND PERFORMERS </h1>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        loop={true} 
        speed={2000} 
        modules={[FreeMode, Pagination, Autoplay]} 
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-[#c10000] rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-slate-300 opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col justify-between h-full">
                
                <div className="flex flex-col mt-auto gap-0 text-center rounded-lg opacity-80 bg-[#ede9d0] .backdrop-blur">
                  <h1 className="text-xl lg:text-2xl font-semibold"style={Outfit}>{item.title}</h1>
                  <p className="lg:text-[18px] font-medium"style={Outfit}>{item.content}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default Carousal;
