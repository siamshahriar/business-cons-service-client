import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";

const AddReview = ({ close, cataName, postReviewToDB }) => {
  const { user } = useContext(AuthContext);
  useTitle("Add a Review");
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const text = form.review.value;
    const img = user?.photoURL;
    const category = cataName;
    const postReview = { name, category, email, text, img };
    postReviewToDB(postReview, close);

    // console.log(name, email, review);
  };
  return (
    <div className="p-8 rounded bg-gray-800">
      <h1 className="font-medium text-3xl text-violet-400 text-center">
        Add Review
      </h1>
      <p className="text-gray-300 text-center font-serif mt-6">
        on {cataName?.toUpperCase()} Consultant
      </p>

      <form onSubmit={handleAddReview}>
        <div className="mt-8  space-y-6">
          <div>
            <label
              htmlFor="name"
              className="text-sm text-gray-300 block mb-1 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={user?.displayName}
              readOnly
              className="bg-gray-800 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-300 w-full"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm text-gray-300 block mb-1 font-medium"
            >
              Email Adress
            </label>
            <input
              type="text"
              name="email"
              id="email"
              defaultValue={user?.email}
              readOnly
              className="bg-gray-800 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-300 w-full"
              placeholder="yourmail@provider.com"
            />
          </div>

          <div>
            <label
              htmlFor="job"
              className="text-sm text-gray-300 block mb-1 font-medium"
            >
              Review
            </label>
            <input
              type="text"
              name="review"
              id="job"
              required
              className="bg-gray-900 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-100 w-full"
              placeholder="(ex. developer)"
            />
          </div>
        </div>

        <div className="space-x-4 mt-8">
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
          >
            Add
          </button>

          <button
            onClick={close}
            className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
