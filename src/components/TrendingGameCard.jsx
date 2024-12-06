import React from 'react';

const TrendingGameCard = ({game}) => {
    return (
        <div className='border dark:border-gray-500 p-4'>
            <img className='w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-52 lg:w-52 lg:h-64 object-cover' src={game.image} alt="" />
            <h3 className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold'>{game.name}</h3>
            <p className='btn btn-xs bg-green-600 text-white mr-2'>{game.steamRating}</p>
            <span className=' border-green-600 text-xs rounded-full text-green-600'>{game.genre}</span>
        </div>
    );
};

export default TrendingGameCard;