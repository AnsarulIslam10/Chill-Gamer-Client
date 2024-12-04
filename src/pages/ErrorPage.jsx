import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center' >
            <img className='w-[900px]' src="https://i.ibb.co.com/hfvfsXf/Pngtree-error-404-page-not-found-5768129.png" alt="" />
            <Link to={'/'} className='btn btn-lg relative -top-40 bg-purple-500 rounded-none text-white text-xl'>Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;