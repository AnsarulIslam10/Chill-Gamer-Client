import React, { useEffect, useState } from 'react';
import GameNewsCard from './GameNewsCard';

const GameNews = () => {
    const [gameNews, setGameNews] = useState([])
    useEffect(()=>{
        fetch('https://chill-gamer-server-tau.vercel.app/gameNews')
        .then(res=>res.json())
        .then(data=>setGameNews(data))
    },[])
    return (
        <div className='my-16'>
            <h2 className="mb-8 text-center text-4xl font-bold" >Latest Game News</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {
                    gameNews.map(news => <GameNewsCard key={news._id} news={news}></GameNewsCard>)
                }
            </div>
        </div>
    );
};

export default GameNews;