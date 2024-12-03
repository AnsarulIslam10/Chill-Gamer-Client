import React from 'react';
import Banner from '../components/Banner';
import HighestRatedGame from '../components/HighestRatedGame';

const HomePage = () => {
    return (
        <div className='max-w-7xl mx-auto px-2'>
            <Banner></Banner>
            <HighestRatedGame></HighestRatedGame>
        </div>
    );
};

export default HomePage;