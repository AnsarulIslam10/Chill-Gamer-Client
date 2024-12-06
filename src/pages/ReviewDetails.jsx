import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FaHeart } from "react-icons/fa6";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
const ReviewDetails = () => {
  const loadedReview = useLoaderData();
  const [review, setReview] = useState(loadedReview);
  const {user} = useContext(AuthContext)
  console.log(user.email)

  console.log(review)
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
    const{_id, ...newReview}= {
      ...review,
      email: user.email,
      username: user.displayName
    }
    fetch("http://localhost:5000/myWatchlist", {
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
      <div className="flex sm:items-center flex-col sm:flex-row max-w-5xl mx-auto justify-center gap-12 border p-4 sm:p-8 md:p-12 shadow-lg">
      <div>
        <img className="w-[500px]" src={cover} alt="" />
      </div>
      <div>
        <h2 className="text-3xl font-semibold"><span></span>{name}</h2>
        <div className="flex items-center mb-2">
          <ReactStars
            count={5}
            value={rating}
            size={24}
            activeColor="#ffd700"
          />
          <p>({rating})</p>
        </div>
        <p className="btn btn-xs btn-ghost btn-outline border-green-600 rounded-full text-green-600 mb-2">{genres}</p>
        <p><span className="font-semibold">Release Year: </span>{year}</p>
        <p><span className="font-semibold">Review: </span>{description}</p>
        <h3 className="mt-2 text-lg font-medium">reviewer’s info:</h3>
        <div className="bg-purple-50 p-2 mb-2">
            <p><span className="font-semibold">Name:</span> {username}</p>
            <p><span className="font-semibold">Email:</span> {email}</p>
        </div>
        <div>
            <button onClick={handleAddToWatchlist} className="btn bg-purple-500 rounded-none text-white">
                Add to Watchlist<FaHeart/>
            </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
