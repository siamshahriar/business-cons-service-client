import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "./FullEachReview.css";

const FullEachReviews = ({ eachService }) => {
  const { name, img, price, description } = eachService;
  return (
    <div className="card card-side bg-base-200 shadow-xl flex flex-col lg:flex-row px-10">
      <figure>
        <PhotoProvider maskOpacity={0.5}>
          <PhotoView src={img}>
            <img src={img} className="f-r-img " alt="Movie" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-purple-300">{name}</h2>
        <div className="divider"></div>
        <p className="f-r-desc">{description}</p>
        <div className="divider"></div>
        <p className="text-2xl font-semibold text-purple-300">
          Price: ${price}
        </p>
      </div>
    </div>
  );
};

export default FullEachReviews;
