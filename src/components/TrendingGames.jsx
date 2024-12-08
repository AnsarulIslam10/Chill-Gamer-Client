import React, { useEffect, useState } from "react";
import TrendingGameCard from "./TrendingGameCard";
import Marquee from "react-fast-marquee";
const TrendingGames = () => {
  const [trendingGames, setTrendingGames] = useState([]);
  useEffect(() => {
    fetch("https://chill-gamer-server-tau.vercel.app/trendingGames")
      .then((res) => res.json())
      .then((data) => setTrendingGames(data));
  }, []);
  return (
    <div className="my-16 md:my-20">
      <h2 className="mb-2 text-center text-2xl sm:text-3xl md:text-4xl text-cyan-500 font-orbitron font-bold">
        Trending Games
      </h2>
      <p className="text-sm text-center max-w-xl mx-auto mb-6 text-gray-500 dark:text-gray-400">
        Stay up to date with the latest trending games. See which titles are
        currently making waves in the gaming world!
      </p>
      <Marquee speed={120} pauseOnHover={true}>
        <div className="flex gap-2 py-1">
          {trendingGames.map((game) => (
            <TrendingGameCard key={game._id} game={game}></TrendingGameCard>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TrendingGames;
