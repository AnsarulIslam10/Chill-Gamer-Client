import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from 'react-helmet-async';
const AllReviews = () => {
  const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadedReviews);

  const handleSort = async(e)=>{
    const sortBy = e.target.value;
    const genre = document.getElementById('genre').value;
    const res = await fetch(`https://chill-gamer-server-tau.vercel.app/reviews?genre=${genre}&sortBy=${sortBy}`)
    const sortData = await res.json()
    setReviews(sortData)
  }
  const handleFilter = async(e)=>{
    const genre = e.target.value;
    const sortBy= document.getElementById('sort').value;
    const res = await fetch(`https://chill-gamer-server-tau.vercel.app/reviews?genre=${genre}&sortBy=${sortBy}`)
    const filterData = await res.json()
    setReviews(filterData)
  }

  return (
    <div className="max-w-7xl px-2 my-16 mx-auto">
      <Helmet>
        <title>Chill Gamer | All Reviews</title>
      </Helmet>
      <div className="text-center mt-6 mb-12">
        <h2 className="mb-3 text-center text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold">All Reviews</h2>
        <p>
        Discover honest opinions and ratings for all games.
        </p>
      </div>
      <div className="flex justify-end gap-3 mb-3">
        <div>
          <select
            className="select select-bordered dark:bg-gray-600 rounded-none w-full"
            name="ratings"
            id="genre"
            onChange={handleFilter}
          >
            <option disabled value="All" selected>
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
        <div>
          <select
            className="select select-bordered dark:bg-gray-600 rounded-none w-full"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reviews.map((review, idx) => (
          <Zoom key={review._id} duration={500} triggerOnce={true} >

          <ReviewCard  review={review}></ReviewCard>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
