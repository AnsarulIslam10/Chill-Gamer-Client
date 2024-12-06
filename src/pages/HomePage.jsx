import React from 'react';
import Banner from '../components/Banner';
import HighestRatedGame from '../components/HighestRatedGame';
import TrendingGames from '../components/TrendingGames';
import GameNews from '../components/GameNews';

const HomePage = () => {
    return (
        <div className='max-w-7xl mx-auto px-2'>
            <Banner></Banner>
            <HighestRatedGame></HighestRatedGame>
            <TrendingGames></TrendingGames>
            <GameNews></GameNews>
        </div>
    );
};

export default HomePage;