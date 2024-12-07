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
            `btn btn-sm btn-ghost rounded-none hover:bg-purple-400 ${
              isActive ? "bg-purple-500 text-white" : ""
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
            `btn btn-sm btn-ghost rounded-none hover:bg-purple-400 ${
              isActive ? "bg-purple-500 text-white" : ""
            }`
          }
        >
          All Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addReview"}
          className={({ isActive }) =>
            `btn btn-sm btn-ghost rounded-none hover:bg-purple-400 ${
              isActive ? "bg-purple-500 text-white" : ""
            }`
          }
        >
          ADD Review
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/myReviews"}
          className={({ isActive }) =>
            `btn btn-sm btn-ghost rounded-none hover:bg-purple-400 ${
              isActive ? "bg-purple-500 text-white" : ""
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
            `btn btn-sm btn-ghost rounded-none hover:bg-purple-400 ${
              isActive ? "bg-purple-500 text-white" : ""
            }`
          }
        >
          Game WatchList
        </NavLink>
      </li>
    </Zoom>
  );
  return (
    <nav className="max-w-7xl px-2 mx-auto sticky top-0 z-50">
      <div className="navbar bg-base-100 backdrop-blur-sm dark:bg-black/5 bg-white/5 dark:text-purple-400 text-purple-500 px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-1 text-xl lg:hidden">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm backdrop-blur-sm bg-white/5 text-white dropdown-content bg-base-100 rounded-none z-[10] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Slide>
            <a className="font-black text-purple-600 text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-orbitron">
              Chill Gamer
            </a>
          </Slide>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <button onClick={toggleTheme} className="btn btn-sm btn-circle mr-2">
            {theme === "light" ? <FaMoon /> : <FaSun />}
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
                    className="sm:w-10 sm:h-10 w-7 h-7 border-2 border-blue-500 rounded-full ml-1 mr-2"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm sm:btn-md bg-purple-500 border-none rounded-none text-white"
                >
                  Log Out
                </button>
              </div>
            </Slide>
          ) : (
            <Slide direction="right">
              <div>
                <Link
                  to={"/login"}
                  className="btn btn-sm px-1 sm:px-3 sm:btn-md border-none mr-1 bg-purple-500 rounded-none text-white"
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
            </Slide>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
