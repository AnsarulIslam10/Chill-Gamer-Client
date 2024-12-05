import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { FaSort } from "react-icons/fa6";

const AllReviews = () => {
  const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadedReviews);

  const handleSort = (e) => {
    const sort = e.target.value;
    let sortedReviews;
    if (sort === "rating-ascending") {
      sortedReviews = [...reviews].sort((a, b) => a.rating - b.rating);
    } else if (sort === "rating-descending") {
      sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating);
    } else if (sort === "year-ascending") {
      sortedReviews = [...reviews].sort((a, b) => a.year - b.year);
    } else if (sort === "year-descending") {
      sortedReviews = [...reviews].sort((a, b) => b.year - a.year);
    }
    setReviews(sortedReviews);
  };
  console.log(reviews);
  return (
    <div className="max-w-7xl px-2 mx-auto">
      <div className="text-center mt-6 mb-12">
        <h2 className="text-3xl font-semibold">All Reviews</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          inventore error
        </p>
      </div>
      <div className="flex justify-end mr-10 mb-3">
        <div>
          <label className="label">
            <span className="label-text text-white text-lg">Sort</span>
          </label>
          <select
            className="select select-bordered rounded-none w-full"
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
