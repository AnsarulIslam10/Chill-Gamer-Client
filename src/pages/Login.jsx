import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
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
              backgroundImage: `url(https://i.ibb.co.com/GQrxY0W/side-banner-2.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition:'center',
              backgroundRepeat:'no-repeat'
            }}
          ></div>
        </div>

        <div className="w-1/2  p-8 flex flex-col justify-center backdrop-blur-sm bg-white/10">
          <h2 className="text-white text-2xl font-bold text-center mb-6">
            LOGIN
          </h2>
          <div className="flex justify-center gap-4 mb-4">
            <button className="btn btn-circle btn-ghost text-5xl hover:scale-105 transition-all duration-300 text-white">
              <FcGoogle />
            </button>
          </div>
          <div className="divider divider-neutral text-white">OR</div>
          <form className="space-y-4">
            <div className="form-control">
              <label className="label text-white">
                <span>Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Please enter your email"
                className="input input-bordered input-info bg-transparent text-white focus:outline-none"
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
              />
            </div>
            <div>
              <a href="#" className="text-sm text-white hover:underline">
                Forgot your password?
              </a>
            </div>
            <button className="btn btn-primary w-full mt-4">
              Login
            </button>
          </form>
          <p className="text-center text-white mt-6">
            Don't have an account?{" "}
            <Link to={'/register'} className="text-blue-200 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
