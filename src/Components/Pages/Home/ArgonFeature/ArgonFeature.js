import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ArgonFeature = () => {
  return (
    <div className="bg-gray-800 rounded-lg my-20 drop-shadow-2xl">
      <div className="p-8 ">
        <div className="flex felx-col items-center justify-center">
          <span className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm">
            Insight
          </span>
        </div>
        <h1 className="text-4xl font-medium text-gray-200 text-center mt-6">
          Full-Funnel Social Analytics
        </h1>
        <p className="text-center mt-6 text-lg font-light text-gray-300">
          The time is now for it to be okay to be great. For being a bright
          color. For standing out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 ">
        <div className="p-8 bg-gray-900 bg-opacity-40 rounded-xl drop-shadow-2xl text-center">
          <div className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 text-3xl shadow-2xl mx-auto">
            <FaStar></FaStar>
          </div>
          <h2 className="uppercase mt-6 text-indigo-400 font-medium mb-3">
            Social conversations
          </h2>
          <p className="font-light text-sm text-gray-300 mb-3">
            We get insulted by others, lose trust for those others. We get back
            stabbed by friends. It becomes harder for us to give others a hand.
          </p>
          <Link className="text-indigo-500 flex items-center hover:text-indigo-600 justify-center">
            More about us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="p-8 bg-gray-900 bg-opacity-40 rounded-xl drop-shadow-2xl text-center">
          <div className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 text-3xl shadow-2xl mx-auto">
            <FaStar></FaStar>
          </div>
          <h2 className="uppercase mt-6 text-red-400 font-medium mb-3">
            Social conversations
          </h2>
          <p className="font-light text-sm text-gray-300 mb-3">
            We get insulted by others, lose trust for those others. We get back
            stabbed by friends. It becomes harder for us to give others a hand.
          </p>
          <Link className="text-red-500 flex items-center hover:text-red-600 justify-center">
            More about us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="p-8 bg-gray-900 bg-opacity-40 rounded-xl drop-shadow-2xl text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 text-3xl shadow-2xl mx-auto">
            <FaStar></FaStar>
          </div>
          <h2 className="uppercase mt-6 text-green-400 font-medium mb-3">
            Social conversations
          </h2>
          <p className="font-light text-sm text-gray-300 mb-3">
            We get insulted by others, lose trust for those others. We get back
            stabbed by friends. It becomes harder for us to give others a hand.
          </p>
          <Link className="text-green-500 flex items-center hover:text-indigo-600 justify-center">
            More about us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArgonFeature;
