import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='dark:bg-[#181818] dark:text-[#e0e0e0]'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-284px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;