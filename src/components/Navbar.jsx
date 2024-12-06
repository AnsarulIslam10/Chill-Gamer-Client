import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [theme, setTheme] = useState('light');

  useEffect(()=>{
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.body.classList.add(storedTheme)
  }, []);
  
  const toggleTheme = ()=>{
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme)
    localStorage.setItem('theme', updatedTheme);
    document.body.className = updatedTheme
  }

  const handleLogOut = () => {
    signOutUser();
    navigate("/");
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"} className={({isActive})=> `btn btn-sm btn-ghost rounded-none hover:bg-purple-400 ${isActive ? 'bg-purple-500 text-white' : ""}`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/reviews"} className={({isActive})=> `btn btn-sm btn-ghost rounded-none hover:bg-purple-400 ${isActive ? 'bg-purple-500 text-white' : ""}`}>All Reviews</NavLink>
      </li>
      {user && user?.email ? (
        <>
          <li>
            <NavLink to={"/addReview"} className={({isActive})=> `btn btn-sm btn-ghost rounded-none hover:bg-purple-400 ${isActive ? 'bg-purple-500 text-white' : ""}`}>ADD Review</NavLink>
          </li>
          <li>
            <NavLink to={"/myReviews"} className={({isActive})=> `btn btn-sm btn-ghost rounded-none hover:bg-purple-400 ${isActive ? 'bg-purple-500 text-white' : ""}`}>My Review</NavLink>
          </li>
          <li>
            <NavLink to={"/myWatchlist"} className={({isActive})=> `btn btn-sm btn-ghost rounded-none hover:bg-purple-400 ${isActive ? 'bg-purple-500 text-white' : ""}`}>Game WatchList</NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );
  return (
    <nav className="max-w-7xl px-2 mx-auto">
      <div className="navbar bg-base-100 dark:bg-[#181818] dark:text-[#e0e0e0] px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-4 text-xl lg:hidden">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="font-bold px-0 text-purple-600 sm:text-2xl">Chill Gamer</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <button onClick={toggleTheme} className="btn btn-sm btn-circle mr-2">
            {theme === 'light'? <FaMoon /> : <FaSun/>}
          </button>
          {user && user?.email ? (
            <div className="flex items-center">
              <div
                className="flex items-center cursor-pointer px-1"
                data-tooltip-id="my-tooltip"
                  data-tooltip-place="bottom"
                data-tooltip-content={user.displayName}
              >
                <img
                  className="sm:w-10 sm:h-10 w-7 h-7 border-2 border-blue-500 rounded-full ml-1 mr-2"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
                <Tooltip id="my-tooltip" className="z-10" />
              <button
                onClick={handleLogOut}
                className="btn btn-sm sm:btn-md bg-purple-500 border-none rounded-none text-white"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div>
              <Link
              to={"/login"}
              className="btn btn-sm px-1 sm:px-3 sm:btn-md border-none bg-purple-500 rounded-none text-white"
            >
              Login
            </Link>
              <Link
              to={"/register"}
              className="btn btn-sm px-1 sm:px-3 sm:btn-md border-none bg-purple-500 rounded-none text-white"
            >
              Register
            </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
