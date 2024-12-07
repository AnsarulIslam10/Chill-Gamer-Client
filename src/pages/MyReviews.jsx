import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaPen, FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import Loading from "./Loading";
const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://chill-gamer-server-tau.vercel.app/myReviews?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server-tau.vercel.app/review/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });
              const remainingReviews = myReviews.filter(
                (reviews) => reviews._id !== id
              );
              setMyReviews(remainingReviews);
            }
          });
      }
    });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (!myReviews || myReviews.length === 0) {
    return (
      <div className="flex min-h-[60vh] justify-center items-center">
        <p className="text-3xl font-semibold font-orbitron text-red-400">
          No Review found.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-2 my-16">
      <h2 className="mb-8 text-center text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold">
        My Review
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-purple-500 text-white">
            <tr>
              <th></th>
              <th>User Name</th>
              <th>Game Title</th>
              <th>Genre</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myReviews.map((review, idx) => (
              <tr
                key={review._id}
                className="hover dark:hover:text-black dark:border-gray-500"
              >
                <th>{idx + 1}</th>
                <td>{review.username}</td>
                <td>{review.name}</td>
                <td>{review.genres}</td>
                <td className="text-center flex flex-col justify-center sm:flex-row">
                  <Link
                    to={`/updateReview/${review._id}`}
                    className="btn btn-sm sm:btn-md btn-circle border-none mr-2 bg-purple-500 text-white"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-place="top"
                    data-tooltip-content="Update"
                  >
                    <FaPen />
                  </Link>
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="btn btn-sm sm:btn-md btn-circle border-none bg-red-500 text-white"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-place="top"
                    data-tooltip-content="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
