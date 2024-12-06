import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ReactStars from "react-rating-stars-component";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
const GameWatchlist = () => {
  const { user } = useContext(AuthContext);
  const [myWatchlist, setMyWatchlist] = useState([]);
  console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/myWatchlist?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyWatchlist(data))
      .catch((err) => console.log(err));
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
        fetch(`http://localhost:5000/myWatchlist/${id}`, {
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
              const remainingReviews = myWatchlist.filter((reviews) => reviews._id !== id);
              setMyWatchlist(remainingReviews);
            }
          });
      }
    });
  };
  console.log(myWatchlist);
  if (!myWatchlist || myWatchlist.length === 0) {
    return <p>No Reviews found.</p>;
  }
  return (
    <div className="max-w-7xl mx-auto px-2 my-16">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-purple-500 text-white">
            <tr>
              <th></th>
              <th>Game Title</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Release Year</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myWatchlist.map((watchlist, idx) => (
              <tr key={watchlist._id} className="hover dark:hover:text-black dark:border-gray-500">
                <th>{idx + 1}</th>
                <td>{watchlist.name}</td>
                <td>{watchlist.genres}</td>
                <td>
                  <ReactStars
                    count={5}
                    value={watchlist.rating}
                    size={24}
                    activeColor="#ffd700"
                  />
                </td>
                <td>{watchlist.year}</td>
                <td className="text-center flex flex-col justify-center sm:flex-row">
                  <button onClick={()=>handleDelete(watchlist._id)} className="btn btn-sm sm:btn-md btn-circle border-none bg-red-500 text-white">
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
export default GameWatchlist;
