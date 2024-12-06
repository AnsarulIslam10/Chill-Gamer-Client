import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaPen, FaTrash, FaX } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data))
      .catch((err) => console.log(err));
  }, [user]);

  if (!myReviews || myReviews.length === 0) {
    return <p>No Reviews found.</p>;
  }

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
        fetch(`http://localhost:5000/review/${id}`, {
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
              const remainingReviews = myReviews.filter((reviews) => reviews._id !== id);
              setMyReviews(remainingReviews);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-2 my-32">
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
              <tr key={review._id} className="hover">
                <th>{idx + 1}</th>
                <td>{review.username}</td>
                <td>{review.name}</td>
                <td>{review.genres}</td>
                <td className="text-center flex flex-col justify-center sm:flex-row">
                  <Link to={`/updateReview/${review._id}`} className="btn btn-sm sm:btn-md btn-circle mr-2 bg-purple-500 text-white">
                    <FaPen />
                  </Link>
                  <button onClick={()=>handleDelete(review._id)} className="btn btn-sm sm:btn-md btn-circle bg-red-500 text-white">
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
