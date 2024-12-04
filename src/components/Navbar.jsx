import React, { useContext } from "react";
import { FaBars, FaMoon } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOutUser();
    navigate("/");
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allReviews"}>All Reviews</NavLink>
      </li>
      <li>
        <NavLink to={"/addReview"}>ADD Review</NavLink>
      </li>
      <li>
        <NavLink to={"/myReview"}>My Review</NavLink>
      </li>
      <li>
        <NavLink to={"/gameWishlist"}>Game WishList</NavLink>
      </li>
    </>
  );
  return (
    <nav className="max-w-7xl px-2 mx-auto">
      <div className="navbar bg-base-100 px-0">
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
          <a className="font-bold px-0 text-purple-600 text-2xl">Chill Gamer</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-sm btn-circle mr-2">
            <FaMoon />
          </button>
          {user && user?.email ? (
            <div className="flex items-center">
              <div className="flex items-center tooltip tooltip-bottom cursor-pointer px-1" data-tip={user?.displayName}>
                <img
                  className="w-10 h-10 border-2 border-blue-500 rounded-full ml-1"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <button
                onClick={handleLogOut}
                className="btn bg-purple-500 rounded-none text-white"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-purple-500 rounded-none text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
