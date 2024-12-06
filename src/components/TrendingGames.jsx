import React, { useEffect, useState } from 'react';
import TrendingGameCard from './TrendingGameCard';
import Marquee from "react-fast-marquee";
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
            <h2 className='text-center text-4xl underline underline-offset-[10px] font-semibold mb-8'>Trending Games</h2>
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