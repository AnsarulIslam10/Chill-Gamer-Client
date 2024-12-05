import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Banner = () => {
  const [text1] = useTypewriter({
    words: ['Latest', 'Game', 'Reviews'],
    loop: true
  })
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/X8dT1V6/rdr2.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
            ❯
          </a>
        </div>
        <div className="absolute bottom-10 left-5 text-white max-w-sm">
          <span className="text-3xl font-semibold">{text1}</span>
          <Cursor cursorColor='red' />
          <p className="text-gray-300">Discover top games with in-depth reviews, honest ratings, and expert opinions to guide your next adventure!.</p>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/GQ8r09S/gta5.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/L6dwd0g/elden-ring.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
