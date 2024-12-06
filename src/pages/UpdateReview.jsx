import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateReview = () => {
  const review = useLoaderData();
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
    const ratings = form.ratings.value;
    const year = form.year.value;
    const genres = form.genres.value;
    const username = form.username.value;
    const email = form.email.value;
    const review = form.review.value;
    const rating = Number(ratings);
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
        }
      });
  };
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(https://i.ibb.co.com/Bnz6mh0/pubg-mobile-game-image-5.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl px-2 mx-auto py-16">
        <div className="card w-full  max-w-3xl backdrop-blur-md shadow-lg mx-auto shrink-0">
          <form onSubmit={handleUpdateReview} className="card-body shadow-lg">
            <h2 className="text-4xl font-bold text-white text-center">
              Update Your Game Review
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">
                  Game Title
                </span>
              </label>
              <input
                type="text"
                defaultValue={name}
                name="name"
                placeholder="Please enter game name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">
                  Game Cover Image
                </span>
              </label>
              <input
                type="text"
                defaultValue={cover}
                name="cover"
                placeholder="Please enter game cover image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Rating</span>
              </label>
              <select
                className="select select-bordered w-full"
                name="ratings"
                defaultValue={rating}
                id=""
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">
                  Publishing Year
                </span>
              </label>
              <input
                type="text"
                defaultValue={year}
                name="year"
                placeholder="Please enter game name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Genres</span>
              </label>
              <select
                className="select select-bordered w-full"
                name="genres"
                defaultValue={genres}
                id=""
              >
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
                <option value="FPS">FPS</option>
                <option value="Adventure">Adventure</option>
                <option value="Survival">Survival</option>
                <option value="Horror">Horror</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">User Name</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Your name"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">
                  User Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">
                  Review Description
                </span>
              </label>
              <textarea
                name="review"
                defaultValue={description}
                className="textarea textarea-bordered"
                placeholder="Write your review"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-purple-500 rounded-none text-white border-none">
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
