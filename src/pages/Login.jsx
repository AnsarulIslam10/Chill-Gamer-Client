import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { errorHandler } from "../firebase/FirebaseErrorHandler";


const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

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

    signInUser(email, password)
      .then((result) => {
        toast.success("Login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        if (err && err.code) {
          errorHandler(err)
        }
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Login Successfull");
        navigate(location?.state ? location.state : "/");
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
        <title>Chill Gamer | Login</title>
      </Helmet>
      <div className="w-[700px] mb-96 pt-16 px-2 flex shadow-xl rounded-2xl overflow-hidden">
        <div className="hidden sm:block w-1/2">
          <div
            className="flex flex-col items-center h-full"
            style={{
              backgroundImage: `url(https://i.ibb.co.com/dDCXSSJ/side-banner-2.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center backdrop-blur-sm bg-white/10">
          <h2 className="text-cyan-400 text-2xl font-bold text-center font-orbitron mb-6">
            LOGIN
          </h2>
          <div className="flex justify-center gap-4 mb-4">
            <a
              onClick={handleGoogleSignIn}
              className="btn btn-circle btn-ghost text-5xl hover:scale-105 transition-all duration-300 text-white"
            >
              <FcGoogle />
            </a>
          </div>
          <div className="divider divider-info text-white">OR</div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="form-control">
              <label className="label text-white">
                <span>Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Please enter your email"
                className="input rounded-none input-bordered input-info bg-transparent text-white focus:outline-none"
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
                className="input rounded-none input-bordered input-info  bg-transparent text-white focus:outline-none"
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
            <div>
              <a href="#" className="text-sm text-white hover:underline">
                Forgot your password?
              </a>
            </div>
            <button className="btn bg-cyan-500 text-white border-none rounded-none w-full mt-4">Login</button>
          </form>
          <p className="text-center text-white mt-6">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-cyan-200 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
