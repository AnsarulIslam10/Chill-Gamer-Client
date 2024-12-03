import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        {/* information */}
          <div className="absolute text-neutral-100 p-6">
            <h2>Red Dead Redemption 2</h2>
            <p>An epic story of survival and betrayal in the wild, wild west</p>
          </div>
        <img
          src="https://i.ibb.co.com/X8dT1V6/rdr2.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
            ❯
          </a>
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
