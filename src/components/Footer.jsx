import React from "react";
import { FaFacebook, FaSteam, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="dark:bg-[#1d1d1d] py-10 sm:py-16 md:py-20 bg-[#f8f7f7] dark:text-[#e0e0e0] p-6 sm:p-10">
      <section className="footer justify-between max-w-7xl px-2 mx-auto">
        <nav>
          <h6 className="text-3xl font-bold font-orbitron text-purple-500">
            Chill Gamer
          </h6>
          <p className="w-60 mb-3 dark:text-gray-400 text-gray-500">
            Your ultimate destination for unbiased game reviews, insights, and
            recommendations. Stay ahead in the gaming world!
          </p>
          <div className="flex items-center text-3xl gap-4">
            <a
              href="https://www.facebook.com/ansarulislamriyad"
              target="_blank"
            >
              {" "}
              <FaFacebook className="hover:scale-125 cursor-pointer transition-all duration-200" />
            </a>
            <a href="https://x.com/ansarulislam_10" target="_blank">
              <FaXTwitter className="hover:scale-125 cursor-pointer transition-all duration-200" />
            </a>
            <a href="https://store.steampowered.com/" target="_blank">
              <FaSteam className="hover:scale-125 cursor-pointer transition-all duration-200" />
            </a>
          </div>
        </nav>
        <nav className="text-gray-500 dark:text-gray-300">
          <h6 className="text-xl text-black dark:text-gray-300 font-semibold">
            Quick Links
          </h6>
          <Link to={'/'} className="link link-hover">About us</Link>
          <Link to={'/reviews'} className="link link-hover">Game Reviews</Link>
          <Link to={'/addReview'} className="link link-hover">Add Review</Link>
          <Link to={'/myReviews'} className="link link-hover">My Review</Link>
        </nav>
        <form>
          <h6 className="text-2xl font-semibold font-orbitron">
            Stay Connected
          </h6>
          <fieldset className="form-control">
            <label className="label">
              <span className="label-text dark:text-gray-300">
                Subscribe to our newsletter
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email"
                className="input rounded-none w-40 lg:w-auto input-bordered join-item"
              />
              <button className="btn bg-purple-500 border-none text-white rounded-none join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </footer>
  );
};

export default Footer;
