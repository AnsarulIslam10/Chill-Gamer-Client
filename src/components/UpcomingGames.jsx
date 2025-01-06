import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const UpcomingGames = () => {
  const [upcomingGames, setUpcomingGames] = useState([]);

  useEffect(() => {
    fetch("/upcomingGames.json")
      .then((response) => response.json())
      .then((data) => setUpcomingGames(data))
      .catch((error) => console.error("Error fetching upcoming games:", error));
  }, []);

  return (
    <section className="upcoming-games">
      <div className="container mx-auto px-2 md:px-0">
        <h2 className="mb-2 text-center text-2xl sm:text-3xl md:text-4xl text-cyan-500 font-orbitron font-bold">
          Upcoming Games
        </h2>
        <p className="text-sm text-center max-w-xl mx-auto mb-6 text-gray-500 dark:text-gray-400">
          Discover the most anticipated upcoming games and get ready for their
          release!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingGames.map((game) => (
            <div
              key={game.id}
              className="game-card bg-white p-4 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={game.image}
                alt={game.title}
                className="mb-3 w-full aspect-video object-cover"
              />
              <h3 className="text-xl font-semibold text-cyan-500 mt-4">
                {game.title}
              </h3>
              <p className="text-gray-400 flex items-center mt-2 gap-1">
                <FaCalendarAlt /> {game.releaseDate}
              </p>
              <p className="text-gray-400 mt-2">{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingGames;
