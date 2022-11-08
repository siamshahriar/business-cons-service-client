import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content ">
        <form
          onSubmit={handleLogIn}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <h1 className="text-4xl font-semibold text-center">Login </h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div>
              <p className="text-center">Log in with</p>
              <div className="flex justify-center mt-3">
                <button className="btn btn-link bg-yellow-300">
                  <FaGoogle></FaGoogle>
                </button>
              </div>
            </div>
            <label className="label">
              <span className="label-text-alt">New to this site ? </span>
              <Link to="/signup" className="label-text-alt link link-hover">
                Register here
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
