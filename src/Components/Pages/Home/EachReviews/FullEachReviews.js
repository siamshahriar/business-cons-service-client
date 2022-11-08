import React from "react";
import { Link } from "react-router-dom";

const FullEachReviews = ({ service }) => {
  const { _id, name, img, price, description } = service;
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          style={{ height: "300px", objectFit: "cover" }}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullEachReviews;
