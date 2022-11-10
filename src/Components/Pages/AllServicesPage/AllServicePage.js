import React from "react";
import { useLoaderData } from "react-router-dom";
import EachReviews from "../Home/EachReviews/EachReviews";
import useTitle from "../../../Hooks/useTitle";

const AllServicePage = () => {
  const allServices = useLoaderData();
  useTitle("Services");
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-center pt-24 text-3xl font-semibold text-violet-400 font-mono">
        All the Services We Provide
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
        {allServices.map((service) => (
          <EachReviews key={service._id} service={service}></EachReviews>
        ))}
      </div>
    </div>
  );
};

export default AllServicePage;
