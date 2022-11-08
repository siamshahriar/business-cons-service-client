import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import EachReviews from "./EachReviews/EachReviews";

const Home = () => {
  const limitedServices = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
        {limitedServices.map((service) => (
          <EachReviews key={service._id} service={service}></EachReviews>
        ))}
      </div>
      <div className="text-center my-7">
        <Link to="/allservices">
          <button className="btn btn-primary w-32">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
