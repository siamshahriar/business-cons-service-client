import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import EachCustomerReviews from "../EachCustomerReviews/EachCustomerReviews";
import FullEachReviews from "../Home/EachReviews/FullEachReviews";

const ServiceDetails = () => {
  const eachService = useLoaderData();
  const [reviews, setReviews] = useState({});
  const [loading, setLoading] = useState(true);
  const { category } = eachService;
  //   console.log(reviews);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold text-center py-8">
          Service Section
        </h2>
      </div>
      <FullEachReviews eachService={eachService}></FullEachReviews>
      <div>
        <h2 className="text-2xl font-semibold text-center py-8">
          Review Section {reviews.length}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 my-16">
          {!loading ? (
            reviews.map((review) => (
              <EachCustomerReviews
                key={review._id}
                review={review}
              ></EachCustomerReviews>
            ))
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
