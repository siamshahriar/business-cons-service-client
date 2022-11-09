import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "./FullEachReview.css";

const FullEachReviews = ({ eachService }) => {
  const { _id, name, img, price, description } = eachService;
  return (
    <div className="card card-side bg-base-100 shadow-xl flex flex-col lg:flex-row">
      <figure>
        <PhotoProvider maskOpacity={0.5}>
          <PhotoView src={img}>
            <img src={img} className="f-r-img " alt="Movie" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="f-r-desc">{description}</p>
        <p className="text-xl font-semibold">Price: ${price}</p>
      </div>
    </div>
  );
};

export default FullEachReviews;
