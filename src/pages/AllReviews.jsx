import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { Slide, Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
const AllReviews = () => {
  const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadedReviews);

  const handleSort = async (e) => {
    const sortBy = e.target.value;
    const genre = document.getElementById("genre").value;
    const res = await fetch(
      `https://chill-gamer-server-tau.vercel.app/reviews?genre=${genre}&sortBy=${sortBy}`
    );
    const sortData = await res.json();
    setReviews(sortData);
  };
  const handleFilter = async (e) => {
    const genre = e.target.value;
    const sortBy = document.getElementById("sort").value;
    const res = await fetch(
      `https://chill-gamer-server-tau.vercel.app/reviews?genre=${genre}&sortBy=${sortBy}`
    );
    const filterData = await res.json();
    setReviews(filterData);
  };

  return (
    <div className="max-w-7xl px-2 mb-10 sm:my-10 md:my-14 lg:my-16 mx-auto">
      <Helmet>
        <title>Chill Gamer | All Reviews</title>
      </Helmet>
      <div className="text-center mt-6">
        <h2 className="mb-2 text-center text-2xl sm:text-3xl md:text-4xl text-cyan-500 font-orbitron font-bold">
          All Reviews
        </h2>
        <p class="text-sm text-center mb-4 text-gray-500 dark:text-gray-400">
          Discover honest opinions and ratings for all games.
        </p>
      </div>
      <Slide direction="right" triggerOnce={true}>
        <div className="flex justify-end gap-3 mb-3">
          <div className="w-24">
            <select
              className="select select-bordered bg-transparent dark:border-gray-500 dark:focus:bg-gray-800 rounded-none w-full"
              name="ratings"
              id="genre"
              onChange={handleFilter}
            >
              <option value="All" selected>
                Filter
              </option>
              {/* <option value="All" selected>All</option> */}
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
          <div className="w-32">
            <select
              className="select select-bordered bg-transparent dark:border-gray-500 dark:focus:bg-gray-800 rounded-none w-full"
              name="ratings"
              id="sort"
              onChange={handleSort}
            >
              <option disabled selected>
                Sort
              </option>
              <option value="rating-ascending">Low to High (Rating)</option>
              <option value="rating-descending">High to Low (Rating)</option>
              <option value="year-ascending">Oldest (Year)</option>
              <option value="year-descending">Newest (Year)</option>
            </select>
          </div>
        </div>
      </Slide>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reviews.map((review, idx) => (
          <Zoom key={review._id} duration={1000} triggerOnce={true}>
            <ReviewCard review={review}></ReviewCard>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
