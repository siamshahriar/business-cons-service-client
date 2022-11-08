import React from "react";
import image from "../../../../assets/banner.jpg";
import "./Bannner.css";

const Banner = () => {
  return (
    <div
      className="hero "
      style={{ backgroundImage: `url("${image}")`, height: "60vh" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Business Consultant Service
          </h1>
          <p className="mb-5">
            We help digital designers and creative professionals gain
            confidence, learn how to sell, lead their clients, and get paid the
            true value of their work.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
