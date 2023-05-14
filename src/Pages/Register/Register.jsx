import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row justify-around gap-28">
        <div className="w-1/2 ">
          <img src={img} alt="login" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-5">
              Register now!
            </h1>
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="your email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="your password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn bg-[#FF3811] border-none"
                />
              </div>
            </form>
            <p className=" text-center text-sm mt-5">
              New to Car Doctor?
              <span className="text-[#FF3811] font-semibold">
                <Link to={"/login"}> Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
