import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ReactStars from "react-rating-stars-component";
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
              <th>User Name</th>
              <th>Game Title</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Release Year</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myWatchlist.map((watchlist, idx) => (
              <tr key={watchlist._id}>
                <th>{idx + 1}</th>
                <td>{watchlist.username}</td>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default GameWatchlist;
