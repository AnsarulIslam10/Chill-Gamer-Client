import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';
import { errorHandler } from "../firebase/FirebaseErrorHandler";
const Register = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 charecters long.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one Uppercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user
        setUser(user);
        updateUserProfile({displayName: name, photoURL: photo})
        toast.success("Registration successfull");
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {
        if (err && err.code) {
         errorHandler(err)
        }
      });
  };
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(https://i.ibb.co.com/qDj735Z/register-bg-img.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Helmet>
        <title>Chill Gamer | Register</title>
      </Helmet>
      <div className="w-[700px] mb-96 pt-16 flex shadow-xl rounded-2xl px-2 overflow-hidden">
        <div className="hidden sm:block w-1/2">
          <div
            className="flex flex-col items-center h-full"
            style={{
              backgroundImage: `url(https://i.ibb.co.com/F41cqCL/side-banner-3.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center backdrop-blur-sm bg-white/10">
          <h2 className="text-cyan-400 font-orbitron text-2xl font-bold text-center mb-6">
            REGISTER
          </h2>
          <form onSubmit={handleRegister} className="space-y-2">
            <div className="form-control">
              <label className="label text-white">
                <span>Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Please enter your username"
                className="input input-bordered rounded-none input-info bg-transparent text-white focus:outline-none"
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
                className="input input-bordered rounded-none input-info bg-transparent text-white focus:outline-none"
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
                className="input input-bordered rounded-none input-info bg-transparent text-white focus:outline-none"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label text-white">
                <span>Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Please enter your password"
                className="input input-bordered rounded-none input-info  bg-transparent text-white focus:outline-none"
                required
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer right-4 text-neutral-300 top-[57px]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </p>
              {error && (
                <div className="text-yellow-300 font-semibold text-sm mt-2">
                  <p>{error}</p>
                </div>
              )}
            </div>
            <button className="btn bg-cyan-500 border-none text-white rounded-none w-full mt-4">Register</button>
          </form>
          <p className="text-center text-white mt-6">
            Already have an account?{" "}
            <Link to={"/login"} className="text-cyan-200 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
