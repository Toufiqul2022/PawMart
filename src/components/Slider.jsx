import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter"; // ← simple typewriter

import image1 from "../assets/image-3.jpg";
import image2 from "../assets/image-1.jpg";
import image3 from "../assets/image-2.jpg";
import image4 from "../assets/image-4.avif";

const Slider = () => {
  return (
    <div className="max-w-7xl mx-auto my-6">
      <Swiper
        navigation
        loop
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay]}
        className="rounded-2xl overflow-hidden"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[320px] md:h-[520px] object-cover" src={image1} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white space-y-4 pl-10">
              <h1 className="text-3xl md:text-5xl font-bold">
                <Typewriter words={["Find Your Furry Friend Today!"]} cursor cursorStyle="|" />
              </h1>
              <p className="text-lg md:text-xl">Adopt pets, give a home, spread love.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[320px] md:h-[520px] object-cover" src={image2} />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white space-y-4 pl-10">
              <h1 className="text-3xl md:text-5xl font-bold">
                <Typewriter words={["Adopt, Don’t Shop — Give a Pet a Home"]} cursor cursorStyle="|" />
              </h1>
              <p className="text-lg md:text-xl">Give an innocent pet a second chance.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[320px] md:h-[520px] object-cover" src={image3} />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white space-y-4 pl-10">
              <h1 className="text-3xl md:text-5xl font-bold">
                <Typewriter words={["Because Every Pet Deserves Love and Care."]} cursor cursorStyle="|" />
              </h1>
              <p className="text-lg md:text-xl">Food • Toys • Grooming • Training</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[320px] md:h-[520px] object-cover" src={image4} />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white space-y-4 pl-10">
              <h1 className="text-3xl md:text-5xl font-bold">
                <Typewriter words={["All Pets Supplies in One Place."]} cursor cursorStyle="|" />
              </h1>
              <p className="text-lg md:text-xl">Get all your pet supplies and Food.</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;
