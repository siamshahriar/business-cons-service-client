import React from "react";
import image from "../../../../assets/banner.jpg";
import "./Bannner.css";

const Banner = () => {
  return (
    <div id="1" className="carousel-item relative w-full ">
      <div className="carousel-img">
        <img src={image} className="w-full h-full" alt="" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Business <br /> Consultant Service <br />
          at affordable <br /> Cost
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
        <p className="text-white text-xl">
          We help digital designers and creative professionals gain confidence,
          learn how to sell, lead their clients, and get paid the true value of
          their work.
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-2/3">
        <button className="btn btn-success mr-5">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
