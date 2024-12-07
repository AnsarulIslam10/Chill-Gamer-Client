import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useTypewriter } from "react-simple-typewriter";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Banner = () => {
  const [text1] = useTypewriter({
    words: [
      "Dive into reviews.",
      " Discover top games.",
      " Find your next adventure",
    ],
    loop: true,
  });
  const [text2] = useTypewriter({
    words: ["trends", "top-rated games", "hidden gems"],
    loop: true,
  });
  //   https://i.ibb.co.com/rcLHT4d/the-witcher.jpg
  // https://i.ibb.co.com/z89qVjg/forza.jpg
  // https://i.ibb.co.com/SXN5ynT/spider-man.jpg
  // https://i.ibb.co.com/kGSv7PW/ghost.jpg
  // https://i.ibb.co.com/1f00Xgd/slider-image.jpg
  // https://i.ibb.co.com/Bt7TrmF/red-dead.jpg
  // https://i.ibb.co.com/6mQHcx5/batman.jpg
  // https://i.ibb.co.com/0GT1N2h/viper.jpg

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co.com/kGSv7PW/ghost.jpg"
            className="w-full"
          />
          <div className="absolute top-0 w-full h-full text-start flex flex-col justify-center p-12 text-white bg-black bg-opacity-50">
            <h1 className="text-4xl font-bold">Explore All Reviews</h1>
            <h3 className="flex items-center text-red-400 font-semibold">
              <FaQuoteLeft className="text-gray-400" />_{text1}_
              <FaQuoteRight className="text-gray-400" />
            </h3>
            <p className="max-w-sm text-gray-400 mt-4 mb-4">
              Discover an extensive library of game reviews crafted by
              passionate gamers. Whether you're into action, RPGs, or indie
              gems, Chill Gamer has something for everyone. Find the perfect
              game to match your style and mood!
            </p>
            <div>
              <Link
                to={"/reviews"}
                className="btn btn-sm px-1 sm:px-3 sm:btn-md border-purple-500 text-purple-400  btn-outline rounded-none hover:bg-purple-500"
              >
                All Reviews
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co.com/6mQHcx5/batman.jpg"
            className="w-full"
          />
          <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h1 className="text-4xl font-bold">Stay Updated</h1>
            <p>
              Discover the latest{" "}
              <span className="text-purple-600">{text2}</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://i.ibb.co.com/1f00Xgd/slider-image.jpg"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
