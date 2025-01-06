import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FaHeart } from "react-icons/fa6";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const ReviewDetails = () => {
  const loadedReview = useLoaderData();
  const [review, setReview] = useState(loadedReview);
  const { user } = useContext(AuthContext);

  const {
    name,
    cover,
    rating,
    year,
    genres,
    review: description,
    username,
    email,
  } = review;

  const handleAddToWatchlist = () => {
    const { _id, ...newReview } = {
      ...review,
      email: user.email,
      username: user.displayName,
    };
    fetch("https://chill-gamer-server-tau.vercel.app/myWatchlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added to watchlist successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-2 mb-32 mt-32">
      <Helmet>
        <title>Chill Gamer | Review Details</title>
      </Helmet>
      <div className="grid md:grid-cols-12 items-center max-w-5xl mx-auto justify-center md:gap-8 border dark:border-gray-500 p-6 sm:p-8 md:p-12 shadow-lg rounded-xl">
        <div className="col-span-12 md:col-span-7 mb-6 md:mb-0">
          <img
            className="w-full aspect-video object-cover rounded-xl shadow-md"
            src={cover}
            alt=""
          />
        </div>
        <div className="col-span-12 md:col-span-5">
          <h2 className="text-3xl text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
            {name}
          </h2>
          <p className="btn btn-xs btn-ghos btn-outline border-cyan-600 rounded-full text-cyan-600 mb-3">
            {genres}
          </p>
          <p className="mb-3">
            <span className="font-semibold">Release Year:</span> {year}
          </p>
          <div className="flex items-center mb-4">
            <span className="font-semibold mr-2">Rating:</span>
            <ReactStars
              count={5}
              value={rating}
              size={24}
              activeColor="#ffd700"
            />
            <p className="ml-2">({rating})</p>
          </div>
          <h3 className="mt-4 text-lg font-medium">Reviewer’s Info:</h3>
          <div className="bg-cyan-50 dark:bg-cyan-200 dark:text-[#2b2727] p-3 rounded-md mb-4 shadow-md">
            <p>
              <span className="font-semibold">Name:</span> {username}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {email}
            </p>
          </div>
        </div>

        <div className="mt-auto w-full col-span-12">
          <h3 className="text-xl font-semibold mb-3">Review:</h3>
          <p className="text-lg italic text-cyan-700 dark:text-cyan-400 mb-6">
            "{description}"
          </p>
          {user && user?.email && (
            <div className="mt-4">
              <button
                onClick={handleAddToWatchlist}
                className="btn bg-cyan-500 border-none rounded-lg text-white py-2 px-6 flex items-center justify-center hover:bg-cyan-600 transition-all duration-300"
              >
                Add to Watchlist
                <FaHeart className="ml-2 text-lg" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
