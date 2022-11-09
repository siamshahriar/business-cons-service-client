import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, setLoading, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((userCredential) => {
        const user = userCredential.user;

        const currentUser = {
          email: user.email,
        };
        // navigate(from, { replace: true });
        toast.success("Google Log in Successful");

        //JWT
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem("genius-token", data.token);
            navigate(from, { replace: true });
          });

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        // console.log(errorCode);
        toast.error(errorCode.substring(5));
        // The email of the user's account used.
        // ...
      });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        // console.log("login successful");
        const user = userCredential.user;

        const currentUser = {
          email: user.email,
        };
        // form.reset();
        toast.success("Login Successful");
        //get jwt token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem("genius-token", data.token);
            navigate(from, { replace: true });
          });

        //
        // navigate(from, { replace: true });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        toast.error(errorCode.substring(5));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl font-semibold text-center">Login </h1>
          <form onSubmit={handleLogIn} className="card-body">
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
          </form>
          <div className="">
            <div className="">
              <p className="text-center">Log in with</p>
              <div className="flex justify-center mt-3">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-link bg-yellow-300"
                >
                  <FaGoogle></FaGoogle>
                </button>
              </div>
            </div>
            <div className="text-center my-3">
              <span className="text-sm">New to this site ? </span>
              <Link to="/signup" className="text-sm link link-hover">
                Register here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
