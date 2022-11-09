import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const EditReviewModal = ({ close, updateReviewToDB, _id }) => {
  const { user } = useContext(AuthContext);
  const handleEditReview = (e) => {
    e.preventDefault();
    const form = e.target;

    const text = form.review.value;
    // console.log(text);
    // const category = cataName;
    const updatedReview = { text };
    // console.log(updatedReview);
    updateReviewToDB(updatedReview, close, _id);

    // const [open, setOpen] = useState(false);
    // const closeModal = () => setOpen(false);

    // console.log(name, email, review);
  };
  return (
    <div className="p-8 rounded border border-gray-200">
      <h1 className="font-medium text-3xl">Update This Review</h1>
      <form onSubmit={handleEditReview}>
        <div className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={user?.displayName}
              readOnly
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Email Adress
            </label>
            <input
              type="text"
              name="email"
              id="email"
              defaultValue={user?.email}
              readOnly
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="yourmail@provider.com"
            />
          </div>

          <div>
            <label
              htmlFor="job"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Review
            </label>
            <input
              type="text"
              name="review"
              id="job"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="(ex. developer)"
            />
          </div>
        </div>

        <div className="space-x-4 mt-8">
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
          >
            Update
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

export default EditReviewModal;
