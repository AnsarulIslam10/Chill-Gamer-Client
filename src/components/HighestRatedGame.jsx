import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const HighestRatedGame = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch(`https://chill-gamer-server-tau.vercel.app/highestRatedGames`)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mt-16 md:mt-20">
      <h2 className="mb-8 text-center text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold">Highest Rated Games</h2>
      {/* cards */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* card */}
        {games.map((game) => (
          <div className="flex flex-col justify-center items-center border dark:border-gray-500 p-6 hover:scale-105 transition-all duration-300">
          <img className="mb-3" src={game.cover} alt="" />
          <h2 className="text-2xl font-semibold">{game.name}</h2>
          <div className="flex items-center">
            <ReactStars count={5} value={game.rating} size={24} activeColor="#ffd700" />
            <p>({game.rating})</p>
          </div>
          <p>{game.year}</p>
          <h1>{game.genres}</h1>
    
          <Link
            to={`/review/${game._id}`}
            className="btn bg-purple-500 font-orbitron border-none rounded-none text-white mt-3"
          >
            Explore Details
          </Link>
        </div>
        ))}
      </div>
    </div>
  );
};

export default HighestRatedGame;
