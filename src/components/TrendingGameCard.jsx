import React from 'react';

const TrendingGameCard = ({game}) => {
    return (
        <div className="bg-white p-4">
            <img className='w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-52 lg:w-52 lg:h-64 object-cover mx-auto mb-1' src={game.image} alt="" />
            <h3 className='text-xs sm:text-sm text-cyan-500 md:text-base lg:text-lg font-semibold'>{game.name}</h3>
            <p className='btn btn-xs bg-cyan-500 border-none rounded-none btn-ghost text-white mr-2'>{game.steamRating}</p>
            <span className=' border-cyan-600 text-xs rounded-full text-cyan-800 dark:text-cyan-600'>{game.genre}</span>
        </div>
    );
};

export default TrendingGameCard;