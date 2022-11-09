import React from "react";
import {
  FaDribbble,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";

const AnotherPart = () => {
  return (
    <div className="bg-green-100 rounded-lg my-20">
      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Here are our heroes</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                According to the National Oceanic and Atmospheric
                Administration, Ted, Scambos, NSIDClead scentist, puts the
                potentially record maximum.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Ryan Tompson</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <div className="mt-6">
                    <button>
                      <FaTwitter
                        className="bg-blue-400 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ></FaTwitter>
                    </button>
                    <button>
                      <FaFacebookF
                        className="bg-blue-600 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ></FaFacebookF>
                    </button>
                    <button>
                      <FaDribbble className="bg-pink-500 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-1 mb-1"></FaDribbble>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Romina Hadid</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Marketing Specialist
                  </p>
                  <div className="mt-6">
                    <button>
                      <FaGoogle
                        className="bg-red-600 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ></FaGoogle>
                    </button>
                    <button>
                      <FaFacebookF
                        className="bg-blue-600 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ></FaFacebookF>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Alexa Smith</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    UI/UX Designer
                  </p>
                  <div className="mt-6">
                    <button>
                      <FaGoogle
                        className="bg-red-600 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ></FaGoogle>
                    </button>
                    <button>
                      <FaTwitter
                        className="bg-blue-400 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ></FaTwitter>
                    </button>
                    <button>
                      <FaInstagram
                        className="bg-gray-800 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ></FaInstagram>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Jenna Kardi</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Founder and CEO
                  </p>
                  <div className="mt-6">
                    <button>
                      <FaDribbble
                        className="bg-pink-500 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ></FaDribbble>
                    </button>
                    <button>
                      <FaGoogle
                        className="bg-red-600 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ></FaGoogle>
                    </button>
                    <button>
                      <FaTwitter
                        className="bg-blue-400 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ></FaTwitter>
                    </button>
                    <button>
                      <FaInstagram
                        className="bg-gray-800 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      ></FaInstagram>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnotherPart;
