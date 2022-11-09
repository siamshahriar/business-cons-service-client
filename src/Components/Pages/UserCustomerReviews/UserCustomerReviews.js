import React, { useState } from "react";
import "../EachCustomerReviews/EachCustomerReviews.css";
import EditReviewModal from "../EditReviewModal/EditReviewModal";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import "../AddReview/addReview.css";
import useTitle from "../../../Hooks/useTitle";

import { FaWindowClose } from "react-icons/fa";

const UserCustomerReviews = ({ review, updateReviewToDB, handleDelete }) => {
  const { name, text, img, _id } = review;
  useTitle("My Reviews");

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div className="custom-card mb-12 md:mb-16 ">
      <div className="custom-card-img">
        <img src={img} className="custom-card-img" alt="" />
      </div>
      <div className="custom-card-info">
        <p className="custom-text-body">"{text.slice(0, 120)}"</p>
        <p className="custom-text-title">{name}</p>
      </div>
      <div className="h-full w-full flex justify-center items-center gap-6">
        <div>
          {" "}
          <Popup
            trigger={<button className="btn btn-outline btn-xs">Update</button>}
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
                <EditReviewModal
                  updateReviewToDB={updateReviewToDB}
                  _id={_id}
                  close={close}
                ></EditReviewModal>
              </div>
            )}
          </Popup>
        </div>
        <div>
          <button onClick={() => handleDelete(_id)} className="btn btn-xs">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCustomerReviews;
