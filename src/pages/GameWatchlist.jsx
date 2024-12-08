import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ReactStars from "react-rating-stars-component";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import Loading from "./Loading";
import { Helmet } from "react-helmet-async";
const GameWatchlist = () => {
  const { user } = useContext(AuthContext);
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://chill-gamer-server-tau.vercel.app/myWatchlist?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyWatchlist(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
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
        fetch(`https://chill-gamer-server-tau.vercel.app/myWatchlist/${id}`, {
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
              const remainingReviews = myWatchlist.filter(
                (reviews) => reviews._id !== id
              );
              setMyWatchlist(remainingReviews);
            }
          });
      }
    });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (!myWatchlist || myWatchlist.length === 0) {
    return (
      <div className="flex min-h-[60vh] justify-center items-center">
        <p className="text-3xl font-semibold font-orbitron text-red-400">
          No Games found.
        </p>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-2 my-16">
      <Helmet>
        <title>Chill Gamer | Game Watchlist</title>
      </Helmet>
      <h2 className="mb-2 text-center text-2xl sm:text-3xl md:text-4xl text-cyan-500 font-orbitron font-bold">
        My Game Watchlist
      </h2>
      <p className="text-sm text-center max-w-xl mx-auto mb-4 text-gray-500 dark:text-gray-400">
        Keep track of the games you're excited to play. Your watchlist is your
        go-to for future gaming adventures!
      </p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-cyan-500 text-white">
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
              <tr
                key={watchlist._id}
                className="hover dark:hover:text-black dark:border-gray-500"
              >
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
                  <button
                    onClick={() => handleDelete(watchlist._id)}
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
export default GameWatchlist;
