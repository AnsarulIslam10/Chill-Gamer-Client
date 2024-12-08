import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const MainLayout = () => {
    return (
        <div className='dark:bg-[#181818] dark:text-[#e0e0e0]'>
            <Tooltip id="my-tooltip" className="z-10" />
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-400px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;