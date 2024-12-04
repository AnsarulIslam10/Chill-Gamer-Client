import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaPen, FaTrash, FaX } from "react-icons/fa6";

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
  console.log(myReviews);
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
              <tr key={review._id}>
                <th>{idx + 1}</th>
                <td>{review.username}</td>
                <td>{review.name}</td>
                <td>{review.genres}</td>
                <td className="text-center">
                    <button className="btn btn-circle mr-2 bg-purple-500 text-white">
                        <FaPen/>
                    </button>
                    <button className="btn btn-circle bg-red-500 text-white">
                        <FaTrash/>
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
