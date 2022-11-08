import React from "react";
import "./EachCustomerReviews.css";

const EachCustomerReviews = ({ review }) => {
  const { name, text, img } = review;
  return (
    <div className="custom-card">
      <div className="custom-card-img">
        <img src={img} className="custom-card-img" alt="" />
      </div>
      <div className="custom-card-info">
        <p className="custom-text-body">"{text.slice(0, 120)}"</p>
        <p className="custom-text-title">{name}</p>
      </div>
    </div>
  );
};

export default EachCustomerReviews;
