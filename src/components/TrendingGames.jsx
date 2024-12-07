import React, { useEffect, useState } from 'react';
import TrendingGameCard from './TrendingGameCard';
import Marquee from "react-fast-marquee";
const TrendingGames = () => {
    const [trendingGames, setTrendingGames] = useState([])
    useEffect(()=>{
        fetch('https://chill-gamer-server-tau.vercel.app/trendingGames')
        .then(res=>res.json())
        .then(data=>setTrendingGames(data))
    },[])
    return (
        <div className='my-16 md:my-20'>
            <h2 className='mb-8 text-center text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold'>Trending Games</h2>
            <Marquee speed={120}>
            <div className='flex gap-2'>
                {
                    trendingGames.map(game => <TrendingGameCard key={game._id} game={game}></TrendingGameCard>)
                }
            </div>
            </Marquee>
        </div>
    );
};

export default TrendingGames;