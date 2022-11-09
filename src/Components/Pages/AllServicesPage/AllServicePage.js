import React from "react";
import { useLoaderData } from "react-router-dom";
import EachReviews from "../Home/EachReviews/EachReviews";
import useTitle from "../../../Hooks/useTitle";

const AllServicePage = () => {
  const allServices = useLoaderData();
  useTitle("Services");
  return (
    <div>
      <h2 className="text-center mt-8 text-2xl font-semibold text-green-400">
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
