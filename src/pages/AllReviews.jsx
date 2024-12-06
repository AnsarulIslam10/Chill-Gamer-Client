import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { FaSort } from "react-icons/fa6";

const AllReviews = () => {
  const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadedReviews);

  const handleSort = async (e)=>{
    const sort = e.target.value;
    const res = await fetch(`http://localhost:5000/reviews/sortedReviews?sortBy=${sort}`)
    const sortedReviews = await res.json()
    setReviews(sortedReviews)
  }

  const handleFilter = (e)=>{
    const genre = e.target.value;
    if (genre === 'All') {
      setReviews(loadedReviews);
    }
    else{
      const filteredReviews = loadedReviews.filter(review=>review.genres === genre)
      setReviews(filteredReviews);
    }
  }
  console.log(reviews);
  return (
    <div className="max-w-7xl px-2 my-16 mx-auto">
      <div className="text-center mt-6 mb-12">
        <h2 className="text-3xl font-semibold">All Reviews</h2>
        <p>
        Discover honest opinions and ratings for all games.
        </p>
      </div>
      <div className="flex justify-end gap-3 mb-3">
        <div>
          <select
            className="select select-bordered dark:bg-gray-600 rounded-none w-full"
            name="ratings"
            id=""
            onChange={handleFilter}
          >
            <option disabled selected>
              Filter
            </option>
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="FPS">FPS</option>
            <option value="Adventure">Adventure</option>
            <option value="Survival">Survival</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
        <div>
          <select
            className="select select-bordered dark:bg-gray-600 rounded-none w-full"
            name="ratings"
            id=""
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
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
