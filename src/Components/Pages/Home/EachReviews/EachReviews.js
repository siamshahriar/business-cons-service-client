import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const EachReviews = ({ service }) => {
  const { _id, name, img, price, description } = service;
  //   const descr = description.substring(5);
  //   console.log(description);

  return (
    <div className="card w-auto bg-gray-900 bg-opacity-50  shadow-xl">
      <figure className="px-10 pt-10">
        <PhotoProvider maskOpacity={0.5}>
          <PhotoView src={img}>
            <img
              src={img}
              alt="Shoes"
              style={{ height: "300px", objectFit: "cover" }}
              className="rounded-xl"
            />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white">{name}</h2>
        <p>{description.slice(0, 100)}...</p>
        <p className="text-2xl my-6 font-semibold text-gray-300">
          Price: ${price}
        </p>
        <div className="card-actions">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-primary text-slate-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EachReviews;
