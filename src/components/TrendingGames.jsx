import React, { useEffect, useState } from 'react';
import TrendingGameCard from './TrendingGameCard';

const TrendingGames = () => {
    const [trendingGames, setTrendingGames] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/trendingGames')
        .then(res=>res.json())
        .then(data=>setTrendingGames(data))
    },[])
    console.log(trendingGames)
    return (
        <div className='my-16'>
            <h2 className='text-center text-3xl font-semibold mb-8'>Trending Games</h2>
            <div className='flex gap-2'>
                {
                    trendingGames.map(game => <TrendingGameCard key={game._id} game={game}></TrendingGameCard>)
                }
            </div>
        </div>
    );
};

export default TrendingGames;