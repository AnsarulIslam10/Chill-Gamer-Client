import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const ReviewCard = ({ review }) => {
  const { _id, name, cover, rating, year, genres } = review;
  return (
    <div className="flex flex-col justify-center items-center border p-6 hover:scale-105 transition-all duration-300">
      <img className="mb-3" src={cover} alt="" />
      <h2 className="text-2xl font-semibold">{name}</h2>
      <div className="flex items-center">
        <ReactStars count={5} value={rating} size={24} activeColor="#ffd700" />
        <p>({rating})</p>
      </div>
      <p>{year}</p>
      <h1>{genres}</h1>

      <Link
        to={`/review/${_id}`}
        className="btn bg-purple-500 rounded-none text-white mt-3"
      >
        Explore Details
      </Link>
    </div>
  );
};

export default ReviewCard;
<h1>Hello</h1>;
