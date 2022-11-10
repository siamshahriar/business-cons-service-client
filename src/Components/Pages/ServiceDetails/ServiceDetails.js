import React, { useContext, useEffect, useState } from "react";
import {
  Navigate,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Popup from "reactjs-popup";
import EachCustomerReviews from "../EachCustomerReviews/EachCustomerReviews";
import FullEachReviews from "../Home/EachReviews/FullEachReviews";
import "reactjs-popup/dist/index.css";
import AddReview from "../AddReview/AddReview";
import "../AddReview/addReview.css";
import { FaWindowClose } from "react-icons/fa";
import toast from "react-hot-toast";
import useTitle from "../../../Hooks/useTitle";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const eachService = useLoaderData();
  useTitle(eachService.name + " Details and Reviews");
  const [reviews, setReviews] = useState({});
  const [loading, setLoading] = useState(true);
  const [postReviewChange, setpostReviewChnage] = useState({});
  const { category } = eachService;
  //   console.log(reviews);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://business-cons-service-server.vercel.app/reviews/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [postReviewChange]);

  const postReviewToDB = (postReview, close) => {
    fetch("https://business-cons-service-server.vercel.app/addreview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review added successfully");
          setpostReviewChnage(postReview);
          close();
          // setPageTitle("Service Details and Reviews");

          //   form.reset();
        }
      })
      .catch((err) => toast.error(err));
  };

  const pleaseLogIn = () => {
    toast.error("Please login first !!");
    navigate("/login");
  };

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div className="max-w-screen-xl mx-auto pt-20">
      <div>
        <h2 className="text-2xl font-semibold text-center py-8">
          Service Section
        </h2>
      </div>
      <FullEachReviews eachService={eachService}></FullEachReviews>
      <div>
        {!loading ? (
          <>
            <h2 className="text-2xl font-semibold text-center py-8">
              Review Section
            </h2>
            <span className="block text-xl mb-24 text-center">
              Number of Reviews of {eachService.name} service:{" "}
              <span className="font-semibold"> {reviews.length}</span>
            </span>
          </>
        ) : (
          <div className="text-center mt-20">
            <button className="btn loading">loading</button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 my-16">
          {!loading ? (
            reviews.map((review) => (
              <EachCustomerReviews
                key={review._id}
                review={review}
              ></EachCustomerReviews>
            ))
          ) : (
            <div className="text-center"></div>
          )}
        </div>
        <div className="text-center -mt-20 mb-10">
          {!user?.email ? (
            <button onClick={pleaseLogIn} className="btn btn-outline mb-14">
              Add Review
            </button>
          ) : (
            <Popup
              trigger={
                <button className="btn btn-outline mb-14">Add Review</button>
              }
              modal
            >
              {(close) => (
                <div>
                  <button
                    className="close text-2xl text-blue-600 text-end absolute right-2"
                    onClick={close}
                  >
                    <FaWindowClose></FaWindowClose>
                  </button>
                  <AddReview
                    postReviewToDB={postReviewToDB}
                    cataName={reviews[0]?.category}
                    close={close}
                  ></AddReview>
                </div>
              )}
            </Popup>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
