import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../AddReview/addReview.css";
import { FaWindowClose } from "react-icons/fa";
import toast from "react-hot-toast";
import AddReview from "../AddReview/AddReview";
import UserCustomerReviews from "../UserCustomerReviews/UserCustomerReviews";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [reviews, setReviews] = useState({});
  const [loading, setLoading] = useState(true);
  const [postReviewChange, setpostReviewChnage] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [email, postReviewChange]);

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const updateReviewToDB = (updatedReview, close, _id) => {
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          close();
          setpostReviewChnage(Math.floor(Math.random() * 10));
          toast.success("Review Updated Successfully");
        }
      });
  };

  const handleDelete = (_id) => {
    const proceed = window.confirm(
      "are you sure you want to delete this review?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
        method: "DELETE",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("genius-Token")}`,
        // },
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          if (data.deletedCount > 0) {
            setpostReviewChnage(Math.floor(Math.random() * 100));
            toast.success("Review Deleted successfully");
          }
        });
    }
  };

  return (
    <div>
      <div>
        {reviews?.length === 0 ? (
          <h2 className="text-2xl font-semibold text-center py-8">
            No Reviews found for {user?.displayName}
          </h2>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-center py-8">
              Reviews of {user?.displayName} : {reviews.length}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 my-16">
              {!loading ? (
                reviews.map((review) => (
                  <UserCustomerReviews
                    handleDelete={handleDelete}
                    updateReviewToDB={updateReviewToDB}
                    key={review._id}
                    review={review}
                  ></UserCustomerReviews>
                ))
              ) : (
                <p>loading...</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
