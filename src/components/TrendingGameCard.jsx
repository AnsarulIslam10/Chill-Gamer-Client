import React from 'react';

const TrendingGameCard = ({game}) => {
    return (
        <div className='border p-2'>
            <img className='w-52 h-44 object-cover' src={game.image} alt="" />
            <h3 className='text-sm font-semibold'>{game.name}</h3>
            <p className='btn btn-xs bg-green-600 text-white'>{game.steamRating}</p>
            <span className=' border-green-600 text-xs rounded-full text-green-600'>{game.genre}</span>
        </div>
    );
};

export default TrendingGameCard;