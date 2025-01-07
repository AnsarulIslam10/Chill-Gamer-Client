import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
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
      <h2 className="mb-2 text-center text-2xl sm:text-3xl md:text-4xl text-cyan-500 font-orbitron font-bold">
        Highest Rated Games
      </h2>
      <p className="text-sm text-center max-w-xl mx-auto mb-6 text-gray-500 dark:text-gray-400">
        Explore the best games as rated by the community. Discover the top-rated
        titles that everyone loves!
      </p>
      {/* cards */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* card */}
        {games.map((game) => (
          <Zoom key={game._id} duration={1000} triggerOnce={true}>
            <div className="flex h-[100%] flex-col justify-center items-center bg-white dark:bg-slate-800 shadow-sm hover:shadow-md p-2 pb-4 hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img
                  className="mb-3 w-full aspect-video object-cover"
                  src={game.cover}
                  alt=""
                />
                <span className="text-black absolute bottom-5 right-2 badge bg-cyan-500 border-none">
                  {game.genres}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center text-center">
                <h2
                  className="text-xl font-semibold cursor-pointer text-cyan-500"
                  title={game.name}
                >
                  {game.name.length > 20
                    ? `${game.name.slice(0, 20)}...`
                    : game.name}
                </h2>
                <div className="flex items-center">
                  <ReactStars
                    count={5}
                    value={game.rating}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                  />
                  <p>({game.rating})</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">{game.review.slice(0, 50)}...</p>
              </div>

              <Link
                to={`/review/${game._id}`}
                className="btn btn-sm bg-cyan-500 border-none rounded-none text-white mt-3"
              >
                See More
              </Link>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default HighestRatedGame;
