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
    words: ["Play." ,"Review.","Share."],
    loop: true,
  });
  const [text3] = useTypewriter({
    words: ["Save favorites.", "Track new games.", "Build your collection."],
    loop: true,
  });
  

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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co.com/kGSv7PW/ghost.jpg"
            className="w-full"
          />
          <div className="absolute top-0 w-full h-full text-start flex flex-col justify-center items-center
           p-12 text-white bg-black bg-opacity-50">
            <h1 className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-orbitron font-bold mb-2">Explore All Reviews</h1>
            <h3 className="flex items-center text-red-400 text-xs font-semibold">
              <FaQuoteLeft className="text-gray-400" />_{text1}_
              <FaQuoteRight className="text-gray-400" />
            </h3>
            <p className="max-w-sm hidden sm:block text-center text-xs text-gray-400 sm:mt-2 sm:mb-2 md:mb-4 md:mt-4">
              Discover an extensive library of game reviews crafted by
              passionate gamers. Whether you're into action, RPGs, or indie
              gems, Chill Gamer has something for everyone. Find the perfect
              game to match your style and mood!
            </p>
            <div>
              <Link
                to={"/reviews"}
                className="btn btn-xs px-1 sm:px-3 sm:btn-sm md:btn-md border-purple-500 text-purple-400 font-poppins  btn-outline mt-2 rounded-none hover:bg-purple-500"
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
          <div className="absolute top-0 w-full h-full text-start flex flex-col justify-center items-center
           p-12 text-white bg-black bg-opacity-50">
            <h1 className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-orbitron font-bold mb-2">Add Review</h1>
            <h3 className="flex items-center text-red-400 text-xs font-semibold">
              <FaQuoteLeft className="text-gray-400" />_{text2}_
              <FaQuoteRight className="text-gray-400" />
            </h3>
            <p className="max-w-sm hidden sm:block text-center text-xs text-gray-400 sm:mt-2 sm:mb-2 md:mb-4 md:mt-4">
            Got a gaming experience to share? Contribute your insights by adding your reviews. Your perspective helps others decide what to play next, while you become a valued voice in the gaming community!
            </p>
            <div>
              <Link
                to={"/addReview"}
                className="btn btn-xs px-1 sm:px-3 sm:btn-sm md:btn-md border-purple-500 text-purple-400 font-poppins  btn-outline mt-2 rounded-none hover:bg-purple-500"
              >
                Add Review
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          {" "}
          <img
            src="https://i.ibb.co.com/1f00Xgd/slider-image.jpg"
            className="w-full"
          />
          <div className="absolute top-0 w-full h-full text-start flex flex-col justify-center items-center
           p-12 text-white bg-black bg-opacity-50">
            <h1 className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-orbitron font-bold mb-2">Game Watchlist</h1>
            <h3 className="flex items-center text-red-400 text-xs font-semibold">
              <FaQuoteLeft className="text-gray-400" />_{text3}_
              <FaQuoteRight className="text-gray-400" />
            </h3>
            <p className="max-w-sm hidden sm:block text-center text-xs text-gray-400 sm:mt-2 sm:mb-2 md:mb-4 md:mt-4">
            Never lose track of the games you love. Build your personal watchlist to save favorites, track upcoming releases, and plan your next gaming adventure with ease.
            </p>
            <div>
              <Link
                to={"/myWatchlist"}
                className="btn btn-xs px-1 sm:px-3 sm:btn-sm md:btn-md border-purple-500 text-purple-400 font-poppins  btn-outline mt-2 rounded-none hover:bg-purple-500"
              >
                Watchlist
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
