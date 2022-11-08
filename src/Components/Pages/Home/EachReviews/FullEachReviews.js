import React from "react";
import "./FullEachReview.css";

const FullEachReviews = ({ eachService }) => {
  const { _id, name, img, price, description } = eachService;
  return (
    <div className="card card-side bg-base-100 shadow-xl flex flex-col lg:flex-row">
      <figure>
        <img src={img} className="f-r-img " alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="f-r-desc">{description}</p>
      </div>
    </div>
  );
};

export default FullEachReviews;
