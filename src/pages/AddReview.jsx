import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const AddReview = () => {
  const { user } = useContext(AuthContext);

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const cover = form.cover.value;
    const rating = form.rating.value; // Convert to float
    const year = form.year.value;
    const genres = form.genres.value;
    const username = form.username.value;
    const email = form.email.value;
    const review = form.review.value;

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
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>Chill Gamer | Add Review</title>
      </Helmet>
      <div className="max-w-7xl mb-12 flex-1 px-4 mx-auto py-6 sm:py-10 md:py-14 lg:py-16">
        <div className="card w-full max-w-3xl backdrop-blur-md dark:bg-white/10 shadow-lg border-cyan-100 border dark:border-none shadow-cyan-200 dark:shadow-none mx-auto shrink-0">
          <form
            onSubmit={handleAddReview}
            className="card-body text-black shadow-lg"
          >
            <h2 className="text-center mb-2 text-2xl sm:text-3xl md:text-4xl text-cyan-500 font-orbitron font-bold">
              Add Your Game Review
            </h2>
            <p className="text-xs sm:text-sm max-w-xl mx-auto text-center mb-6 text-gray-500 dark:text-gray-400">
              Share your gaming experience and help others choose their next
              favorite game!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="input input-bordered rounded-none input-info bg-transparent dark:text-white focus:outline-none"
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
                  className="input input-bordered rounded-none input-info bg-transparent dark:text-white focus:outline-none"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black dark:text-white text-lg">
                    Rating
                  </span>
                </label>
                <input
                  type="number"
                  name="rating"
                  min="1"
                  max="5"
                  step="0.1"
                  placeholder="Enter rating (1-5)"
                  className="input input-bordered rounded-none input-info bg-transparent dark:text-white focus:outline-none"
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
                  className="input input-bordered rounded-none input-info bg-transparent dark:text-white focus:outline-none"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black dark:text-white text-lg">
                    Genres
                  </span>
                </label>
                <select
                  className="select select-bordered rounded-none bg-transparent select-info dark:focus:bg-gray-800 dark:text-white w-full focus:outline-none"
                  name="genres"
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
                  <span className="label-text text-black dark:text-white text-lg">
                    User Name
                  </span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Your Name"
                  defaultValue={user.displayName}
                  readOnly
                  className="input input-bordered rounded-none input-info bg-transparent dark:text-white focus:outline-none"
                  required
                />
              </div>

              <div className="form-control sm:col-span-2">
                <label className="label">
                  <span className="label-text text-black dark:text-white text-lg">
                    User Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  defaultValue={user.email}
                  readOnly
                  className="input input-bordered rounded-none input-info bg-transparent dark:text-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black dark:text-white text-lg">
                  Review Description
                </span>
              </label>
              <textarea
                name="review"
                className="textarea textarea-bordered h-32 md:h-40 rounded-none bg-transparent textarea-info dark:text-white focus:outline-none"
                placeholder="Write your review"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-cyan-500 rounded-none text-white border-none w-full">
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
