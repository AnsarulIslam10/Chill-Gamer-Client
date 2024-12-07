import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
const AddReview = () => {
  const { user } = useContext(AuthContext);

  const handleAddReview = (e) => {
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
    // const rating = Number(ratings);
    const newReview = {
      name,
      cover,
      rating,
      year,
      genres,
      review,
      username,
      email,
    };

    fetch("https://chill-gamer-server-tau.vercel.app/reviews", {
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
            text: "Review Added Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-[url('https://i.ibb.co.com/WWzQDDT/6436983-3312919.jpg')] dark:bg-[url('https://i.ibb.co.com/PZGBmRW/19852469-6193217.jpg')]"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mb-52 flex-1 px-2 mx-auto py-16">
        <div className="card w-full max-w-3xl backdrop-blur-md dark:bg-white/10 shadow-lg mx-auto shrink-0">
          <form onSubmit={handleAddReview} className="card-body text-black shadow-lg">
            <h2 className="mb-6 text-center text-2xl sm:text-3xl md:text-4xl text-gray-800 dark:text-white font-orbitron font-bold">
              Add Your Game Review
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black dark:text-white text-lg">
                  Game Title
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter game name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black dark:text-white text-lg">
                  Game Cover Image
                </span>
              </label>
              <input
                type="text"
                name="cover"
                placeholder="Enter game cover image url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black dark:text-white text-lg">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                id=""
                min="1"
                max="5"
                step="1"
                placeholder="Enter rating (1-5)"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black dark:text-white text-lg">
                  Publishing Year
                </span>
              </label>
              <input
                type="number"
                name="year"
                placeholder="Game release year"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black dark:text-white text-lg">Genres</span>
              </label>
              <select
                className="select select-bordered w-full"
                name="genres"
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
                <span className="label-text text-black dark:text-white text-lg">User Name</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                defaultValue={user.displayName}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black dark:text-white text-lg">
                  User Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                defaultValue={user.email}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black dark:text-white text-lg">
                  Review Description
                </span>
              </label>
              <textarea
                name="review"
                className="textarea textarea-bordered"
                placeholder="Write your review"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-purple-500 rounded-none text-white border-none">
                Add Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
