import React from "react";
import { FaFacebook, FaSteam, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="dark:bg-[#1d1d1d] py-20 dark:text-[#e0e0e0] p-10">
      <section className="footer justify-between max-w-7xl px-2 mx-auto">
        <nav>
          <h6 className="text-3xl font-bold font-orbitron text-purple-500">Chill Gamer</h6>
          <p className="max-w-lg mb-3 dark:text-gray-400 text-gray-500">Your ultimate destination for unbiased game reviews, insights, and recommendations. Stay ahead in the gaming world!</p>
          <div className="flex items-center text-3xl gap-4">
            <FaFacebook className="hover:scale-125 cursor-pointer transition-all duration-200"/>
            <FaXTwitter className="hover:scale-125 cursor-pointer transition-all duration-200"/>
            <FaSteam className="hover:scale-125 cursor-pointer transition-all duration-200"/>
          </div>
        </nav>
        <nav className="text-gray-500 dark:text-gray-300">
          <h6 className="text-xl text-black dark:text-gray-300 font-semibold">Quick Links</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Game Reviews</a>
          <a className="link link-hover">Gaming News</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <form>
          <h6 className="text-2xl font-semibold font-orbitron">Stay Connected</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text dark:text-gray-300">Subscribe to our newsletter</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email"
                className="input rounded-none input-bordered join-item"
              />
              <button className="btn bg-purple-500 border-none text-white rounded-none join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </section>
    </footer>
  );
};

export default Footer;
