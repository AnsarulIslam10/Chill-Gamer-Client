import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-[80vh] bg-red-400" style={{
            backgroundImage: `url(https://i.ibb.co.com/dWf5gDd/bg.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
          <div className="w-[700px] flex shadow-xl rounded-2xl overflow-hidden">
            <div className="w-1/2 flex flex-col justify-between">
              <div
                className="flex flex-col items-center h-full"
                style={{
                  backgroundImage: `url(https://i.ibb.co.com/ftT2Cbv/side-banner-3.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition:'center',
                  backgroundRepeat:'no-repeat'
                }}
              ></div>
            </div>
    
            <div className="w-1/2  p-8 flex flex-col justify-center backdrop-blur-sm bg-white/10">
              <h2 className="text-white text-2xl font-bold text-center mb-6">
                REGISTER
              </h2>
              <form className="space-y-2">
                <div className="form-control">
                  <label className="label text-white">
                    <span>Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Please enter your username"
                    className="input input-bordered input-info bg-transparent text-white focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label text-white">
                    <span>Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Please enter your photo url"
                    className="input input-bordered input-info bg-transparent text-white focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label text-white">
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Please enter your email"
                    className="input input-bordered input-info bg-transparent text-white focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label text-white">
                    <span>Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Please enter your password"
                    className="input input-bordered input-info  bg-transparent text-white focus:outline-none"
                    required
                  />
                </div>
                <button className="btn btn-primary w-full mt-4">
                  Register
                </button>
              </form>
              <p className="text-center text-white mt-6">
                Already have an account?{" "}
                <Link to={'/login'} className="text-blue-200 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
    );
};

export default Register;