import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const ReviewCard = ({ review }) => {
  const { _id, name, cover, rating, year, genres } = review;
  return (
    <div className="flex h-[100%] flex-col justify-center items-center border dark:border-gray-500 p-6 hover:scale-105 transition-all duration-300">
      <img className="mb-3 w-full aspect-video object-cover" src={cover} alt="" />
      <div className="flex-1 flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl font-semibold text-cyan-500">{name}</h2>
      <div className="flex items-center">
        <ReactStars count={5} value={rating} size={24} activeColor="#ffd700" />
        <p>({rating})</p>
      </div>
      <p>{year}</p>
      <p className="text-cyan-400">{genres}</p>
      </div>

      <Link
        to={`/review/${_id}`}
        className="btn border-none bg-cyan-500 rounded-none text-white mt-3"
      >
        Explore Details
      </Link>
    </div>
  );
};

export default ReviewCard;
<h1>Hello</h1>;
