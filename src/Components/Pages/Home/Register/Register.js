import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  //update profile for photo and name
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const name = form.name.value;
    // console.log(email, password, name, photoURL);

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        // console.log(user);
        handleUpdateUserProfile(name, photoURL);
        toast.success("Registration Successful");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode.substring(5));

        // console.log(errorMessage);
        // ..
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full">
        <form
          onSubmit={handleSignUp}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <h1 className="text-2xl font-semibold text-center pt-10 font-mono">
            Registration
          </h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="photoURL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="input input-bordered"
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <div className="divider"></div>
            <label className="label">
              <span className="text-sm">Already have an account ? </span>
              <Link
                to="/login"
                className="text-sm link link-hover text-violet-300 font-semibold"
              >
                Login here
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
