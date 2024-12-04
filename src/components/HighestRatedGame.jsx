import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
const HighestRatedGame = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/highestRatedGames`)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mt-32">
      <h2
        className="text-3xl text-white inline-block p-4 font-semibold italic"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/mFDN1Np/titlebg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "500px",
          height: "120px",
        }}
      >
        <p className="ml-32 mt-9">Highest Rated Games</p>
      </h2>
      {/* cards */}
      <div className="bg-purple-300 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* card */}
        {games.map((game) => (
          <div
            key={game._id}
            className="p-6 border flex flex-col justify-center items-center"
          >
            <img
              className="w-52 hover:scale-105 hover:-translate-y-3 transition-all duration-300"
              src={game.cover}
              alt=""
            />
            <h2 className="text-2xl font-semibold">{game.name}</h2>
            <p className="text-yellow-500 font-medium">
              <div className="flex items-center mb-2">
                <ReactStars
                  count={5}
                  value={game.rating}
                  size={24}
                  activeColor="#ffd700"
                />
                <p>({game.rating})</p>
              </div>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighestRatedGame;
