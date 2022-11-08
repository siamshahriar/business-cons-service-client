import React from "react";
import { Link } from "react-router-dom";

const EachReviews = ({ service }) => {
  const { _id, name, img, price, description } = service;
  //   const descr = description.substring(5);
  //   console.log(description);

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
        <p>{description.slice(0, 100)}...</p>
        <p className="text-lg font-semibold">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EachReviews;
