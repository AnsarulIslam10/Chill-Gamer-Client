import React from "react";
import Banner from "../components/Banner";
import HighestRatedGame from "../components/HighestRatedGame";
import TrendingGames from "../components/TrendingGames";
import GameNews from "../components/GameNews";
import { Helmet } from 'react-helmet-async';
import UpcomingGames from "../components/UpcomingGames";
const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto dark:text-[#e0e0e0] dark:bg-[#181818] px-2">
      <Helmet>
        <title>Chill Gamer | Home</title>
      </Helmet>
      <Banner></Banner>
      <HighestRatedGame></HighestRatedGame>
      <TrendingGames></TrendingGames>
      <UpcomingGames></UpcomingGames>
      <GameNews></GameNews>
    </div>
  );
};

export default HomePage;
