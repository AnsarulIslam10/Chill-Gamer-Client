import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Zoom, Slide } from "react-awesome-reveal";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.body.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
    document.body.className = updatedTheme;
  };

  const handleLogOut = () => {
    signOutUser();
    navigate("/");
  };
  const links = (
    <Zoom>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `btn btn-sm btn-ghost rounded-none hover:bg-cyan-400 ${
              isActive ? "bg-cyan-500 text-white" : ""
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/reviews"}
          className={({ isActive }) =>
            `btn btn-sm btn-ghost rounded-none hover:bg-cyan-400 ${
              isActive ? "bg-cyan-500 text-white" : ""
            }`
          }
        >
          All Reviews
        </NavLink>
      </li>
      {user && (
        <div className="lg:flex items-center">
          <li>
            <NavLink
              to={"/addReview"}
              className={({ isActive }) =>
                `btn btn-sm btn-ghost rounded-none hover:bg-cyan-400 ${
                  isActive ? "bg-cyan-500 text-white" : ""
                }`
              }
            >
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/myReviews"}
              className={({ isActive }) =>
                `btn btn-sm btn-ghost rounded-none hover:bg-cyan-400 ${
                  isActive ? "bg-cyan-500 text-white" : ""
                }`
              }
            >
              My Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/myWatchlist"}
              className={({ isActive }) =>
                `btn btn-sm btn-ghost rounded-none hover:bg-cyan-400 ${
                  isActive ? "bg-cyan-500 text-white" : ""
                }`
              }
            >
              Game WatchList
            </NavLink>
          </li>
        </div>
      )}
    </Zoom>
  );
  return (
    <nav className="max-w-7xl px-2 mx-auto sticky top-0 z-50">
      <div className="navbar bg-base-100 backdrop-blur-md dark:bg-black/5 bg-white/5 dark:text-cyan-400 text-cyan-600 px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-1 text-xl lg:hidden">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-white/70 dark:bg-black/40 dark:text-cyan-400 text-cyan-800 dropdown-content rounded-none z-[10] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Slide>
            <Link
              to={"/"}
              className="font-black cursor-pointer text-cyan-500 text-center text-sm sm:text-lg md:text-2xl lg:text-3xl font-orbitron"
            >
              Chill Gamer
            </Link>
          </Slide>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-ghost btn-circle sm:mr-2"
          >
            {theme === "light" ? (
              <FaMoon className="text-cyan-500" size={24} />
            ) : (
              <FaSun className="text-yellow-400" size={24} />
            )}
          </button>
          {user && user?.email ? (
            <Slide direction="right">
              <div className="flex items-center">
                <div
                  className="flex items-center cursor-pointer px-1"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-place="bottom"
                  data-tooltip-content={user.displayName}
                >
                  <img
                    className="sm:w-10 sm:h-10 w-7 h-7 border-2 border-cyan-500 rounded-full ml-1"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm md:btn-md bg-cyan-500 border-none rounded-none text-white px-2"
                >
                  Log Out
                </button>
              </div>
            </Slide>
          ) : (
            <Slide direction="right">
              <div>
                <Link
                  to={"/register"}
                  className="btn btn-sm px-1 sm:px-4 sm:btn-md btn-outline border-cyan-500 hover:bg-transparent hover:text-cyan-600 hover:border-cyan-600 text-cyan-500 rounded-full"
                >
                  Register
                </Link>
                <Link
                  to={"/login"}
                  className="btn btn-sm px-1 sm:px-6 sm:btn-md border-none ml-1 bg-cyan-500 rounded-full hover:bg-cyan-600 text-white"
                >
                  Login
                </Link>
              </div>
            </Slide>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
