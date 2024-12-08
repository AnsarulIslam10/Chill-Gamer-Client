import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const UpdateReview = () => {
  const review = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    _id,
    name,
    cover,
    rating,
    year,
    genres,
    review: description,
  } = review;
  const handleUpdateReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const cover = form.cover.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genres = form.genres.value;
    const username = form.username.value;
    const email = form.email.value;
    const review = form.review.value;
    const updatedReview = {
      name,
      cover,
      rating,
      year,
      genres,
      review,
      username,
      email,
    };

    fetch(`https://chill-gamer-server-tau.vercel.app/updateReview/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Review Updated Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          navigate("/myReviews");
        }
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>Chill Gamer | Update Review</title>
      </Helmet>
      <div className="max-w-7xl mb-52 flex-1 px-2 mx-auto py-16">
        <div className="card w-full max-w-3xl backdrop-blur-md dark:bg-white/10 border-cyan-100 border dark:border-none shadow-lg shadow-cyan-200 dark:shadow-none mx-auto shrink-0">
          <form
            onSubmit={handleUpdateReview}
            className="card-body text-black shadow-lg"
          >
            <h2 className="mb-2 text-center text-2xl sm:text-3xl md:text-4xl text-cyan-500 font-orbitron font-bold">
              Update Your Game Review
            </h2>
            <p className="text-sm text-center max-w-xl mx-auto mb-4 text-gray-500 dark:text-gray-400">
              Update your review and share your latest thoughts to help others
              make informed decisions on their next game!
            </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white text-lg">
                  Game Title
                </span>
              </label>
              <input
                type="text"
                defaultValue={name}
                name="name"
                placeholder="Please enter game name"
                className="input input-bordered rounded-none input-info bg-transparent dark:text-white focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white text-lg">
                  Game Cover Image
                </span>
              </label>
              <input
                type="text"
                defaultValue={cover}
                name="cover"
                placeholder="Please enter game cover image"
                className="input input-bordered rounded-none input-info bg-transparent dark:text-white focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white text-lg">
                  Rating
                </span>
              </label>
              <input
                type="number"
                name="rating"
                id=""
                min="1"
                max="5"
                step="1"
                placeholder="Enter rating (1-5)"
                defaultValue={rating}
                className="input input-bordered rounded-none input-info bg-transparent dark:text-white focus:outline-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white text-lg">
                  Publishing Year
                </span>
              </label>
              <input
                type="number"
                defaultValue={year}
                name="year"
                placeholder="Please enter game name"
                className="input input-bordered rounded-none input-info bg-transparent dark:text-white focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white text-lg">
                  Genres
                </span>
              </label>
              <select
                className="select select-bordered rounded-none bg-transparent select-info dark:focus:bg-gray-800 dark:text-white w-full focus:outline-none"
                name="genres"
                defaultValue={genres}
                id=""
              >
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="FPS">FPS</option>
                <option value="TPS">TPS</option>
                <option value="Sports">Sports</option>
                <option value="Survival">Survival</option>
                <option value="Horror">Horror</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white text-lg">
                  User Name
                </span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Your name"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered rounded-none input-info bg-transparent dark:text-white focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white text-lg">
                  User Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered rounded-none input-info bg-transparent dark:text-white focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white text-lg">
                  Review Description
                </span>
              </label>
              <textarea
                name="review"
                defaultValue={description}
                className="textarea textarea-bordered rounded-none bg-transparent textarea-info dark:text-white focus:outline-none"
                placeholder="Write your review"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-cyan-500 rounded-none text-white border-none">
                Update Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
