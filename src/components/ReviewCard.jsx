import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const ReviewCard = ({ review }) => {
  const { _id, name, cover, rating, year, genres } = review;
  return (
    <div className="flex h-[100%] bg-white dark:bg-slate-800 flex-col justify-center items-center shadow-sm hover:shadow-md p-2 pb-4 hover:scale-105 transition-all duration-300">
      <img
        className="mb-3 w-full aspect-video object-cover"
        src={cover}
        alt=""
      />
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h2
          className="text-2xl font-semibold cursor-pointer text-cyan-500"
          title={name}
        >
          {name.length > 20 ? `${name.slice(0, 20)}...` : name}
        </h2>
        <div className="flex items-center">
          <ReactStars
            count={5}
            value={rating}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
          <p>({rating})</p>
        </div>
        <p>{year}</p>
        <p className="text-cyan-400">{genres}</p>
      </div>

      <Link
        to={`/review/${_id}`}
        className="btn btn-sm border-none bg-cyan-500 hover:bg-cyan-600 rounded-none text-white mt-3"
      >
        See More
      </Link>
    </div>
  );
};

export default ReviewCard;
<h1>Hello</h1>;
