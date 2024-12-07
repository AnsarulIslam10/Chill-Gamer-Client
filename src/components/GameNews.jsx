import React, { useEffect, useState } from "react";
import GameNewsCard from "./GameNewsCard";
import { Fade } from "react-awesome-reveal";
const GameNews = () => {
  const [gameNews, setGameNews] = useState([]);
  useEffect(() => {
    fetch("https://chill-gamer-server-tau.vercel.app/gameNews")
      .then((res) => res.json())
      .then((data) => setGameNews(data));
  }, []);
  return (
    <div className="my-16 md:my-20">
      <h2 className="mb-8 text-center text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold">
        Latest Game News
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {gameNews.map((news, idx) => (
          <Fade key={news._id} direction={idx % 2 === 0 ? "right" : "left"} duration={1000} triggerOnce={true}>
            <GameNewsCard news={news}></GameNewsCard>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default GameNews;
