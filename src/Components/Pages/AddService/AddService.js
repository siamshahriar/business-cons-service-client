import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../../Hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const handleAddServce = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const imgURL = form.imgURL.value;
    // console.log(name, category, price, description, imgURL);
    const newService = {
      name,
      category,
      price,
      description,
      img: imgURL,
    };

    fetch("https://business-cons-service-server.vercel.app/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service added successfully");
          form.reset();
        }
      })
      .catch((err) => toast.error(err));
  };
  return (
    <div className="pt-24">
      <div className="p-8 rounded border border-gray-800 bg-gray-800 drop-shadow-2xl max-w-screen-lg mx-auto mb-20">
        <h1 className="font-medium text-3xl text-center font-mono">
          Add Service
        </h1>
        <p className="text-gray-300 mt-6 text-center">
          Enter the Service name, category, price, description and image link of
          banner.{" "}
        </p>

        <form onSubmit={handleAddServce}>
          <div className="mt-8 space-y-6">
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
                required
                className="bg-gray-700 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-300 w-full"
                placeholder="Enter service name"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="text-sm text-gray-300 block mb-1 font-medium"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                required
                className="bg-gray-700 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-300 w-full"
                placeholder="Enter service category"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="text-sm text-gray-300 block mb-1 font-medium"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                required
                className="bg-gray-700 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-300 w-full"
                placeholder="Enter service description"
              />
            </div>

            <div>
              <label
                htmlFor="imgURL"
                className="text-sm text-gray-300 block mb-1 font-medium"
              >
                Image URL
              </label>
              <input
                type="text"
                name="imgURL"
                id="imgURL"
                required
                className="bg-gray-700 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-300 w-full"
                placeholder="Enter service Image URL"
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="text-sm text-gray-300 block mb-1 font-medium"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                required
                className="bg-gray-700 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-300 w-full"
                placeholder="price of the service"
              />
            </div>
          </div>

          <div className="space-x-4 mt-8 text-center">
            <button
              type="submit"
              className="btn btn-outline bg-green-500 text-white w-28"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
