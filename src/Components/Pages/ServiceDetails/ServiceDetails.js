import React from "react";
import { useLoaderData } from "react-router-dom";
import FullEachReviews from "../Home/EachReviews/FullEachReviews";

const ServiceDetails = () => {
  const eachService = useLoaderData();
  return (
    <div>
      <FullEachReviews eachService={eachService}></FullEachReviews>
    </div>
  );
};

export default ServiceDetails;
