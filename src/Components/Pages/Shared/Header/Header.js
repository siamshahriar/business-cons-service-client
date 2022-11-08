import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from "../../../../assets/logo.png";

const Header = () => {
  const user = { name: "Siam" };
  const handleLogOut = () => {};

  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/">Blog</Link>
      </li>
      {user?.email && (
        <>
          <li className="font-semibold">
            <Link to="/myreviews">My Reviews</Link>
          </li>
          <li className="font-semibold">
            <Link to="/addservice">Add Service</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-cyan-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <img src={logo} className="h-full" alt="" />
          <span className="text-sm w-40">Business Consultant Reviews</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <>
            <button onClick={handleLogOut} className="btn-ghost">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <p className="font-semibold">
              <Link to="/login">Login</Link>
            </p>
          </>
        )}
        <Link className="ml-5" to="/profile">
          {user?.photoURL ? (
            <image
              style={{ height: "30px" }}
              roundedCircle
              src={user?.photoURL}
            ></image>
          ) : (
            <FaUser></FaUser>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;