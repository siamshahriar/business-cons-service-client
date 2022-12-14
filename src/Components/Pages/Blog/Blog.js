import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="lg:mb-20 pt-4 max-w-screen-xl mx-auto">
      <section className=" ">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-violet-400 capitalize lg:text-4xl pt-10 text-center font-mono">
            From the blog
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex bg-gray-900 bg-opacity-50 rounded-xl ">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between p-6 lg:mx-6">
                <Link
                  to="/blog/dfsqlnosql"
                  className="text-xl font-semibold text-gray-300 hover:underline  "
                >
                  Difference between SQL and NoSQL
                </Link>

                <span className="text-sm text-gray-400 ">
                  On: 20 October 2019
                </span>
              </div>
            </div>

            <div className="lg:flex bg-gray-900 bg-opacity-50 rounded-xl">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between p-6 lg:mx-6">
                <Link
                  to="/blog/jwt"
                  className="text-xl font-semibold text-gray-300 hover:underline  "
                >
                  What is JWT, and how does it work?
                </Link>

                <span className="text-sm text-gray-400 ">
                  On: 20 October 2019
                </span>
              </div>
            </div>

            <div className="lg:flex bg-gray-900 bg-opacity-50 rounded-xl">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between p-6 lg:mx-6">
                <Link
                  to="/blog/jvnode"
                  className="text-xl font-semibold text-gray-300 hover:underline  "
                >
                  What is the difference between javascript and NodeJS?
                </Link>

                <span className="text-sm text-gray-400 ">
                  On: 25 November 2020
                </span>
              </div>
            </div>

            <div className="lg:flex bg-gray-900 bg-opacity-50 rounded-xl">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between p-6 lg:mx-6">
                <Link
                  to="/blog/nodejs"
                  className="text-xl font-semibold text-gray-300 hover:underline  "
                >
                  How does NodeJS handle multiple requests at the same time?
                </Link>

                <span className="text-sm text-gray-400 ">
                  On: 30 September 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
