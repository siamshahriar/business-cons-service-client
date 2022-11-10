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
    <div className=" rounded-lg my-20 drop-shadow-2xl p-6">
      <section className="pt-20 pb-48 ">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-gray-200">
                Here are our heroes
              </h2>
              <p className="text-lg leading-relaxed m-4 text-gray-300">
                According to the National Oceanic and Atmospheric
                Administration, Ted, Scambos, NSIDClead scentist, puts the
                potentially record maximum.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="w-full lg:mb-0 px-4 py-10 bg-gray-900 rounded-xl drop-shadow-xl">
              <div className="px-4">
                <img
                  alt="..."
                  src="https://i.ibb.co/PcbX1qs/00000-PORTRAIT-00000-BURST20191018142535881-Copy-Copy.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Md. Shahriar Rahman</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <div className="mt-6">
                    <button>
                      <FaTwitter
                        className="bg-blue-400 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-3 mb-1"
                        type="button"
                      ></FaTwitter>
                    </button>
                    <button>
                      <FaFacebookF
                        className="bg-blue-600 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-3 mb-1"
                        type="button"
                      ></FaFacebookF>
                    </button>
                    <button>
                      <FaDribbble className="bg-pink-500 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-0 mb-1"></FaDribbble>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:mb-0 px-4 py-10 bg-gray-900 rounded-xl drop-shadow-xl">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://i.ibb.co/g6jxpwd/301355479-436552408420708-1031929745086360351-n.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Raiyan Karim Nasif</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Marketing Specialist
                  </p>
                  <div className="mt-6">
                    <button>
                      <FaGoogle
                        className="bg-red-600 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-3 mb-1"
                        type="button"
                      ></FaGoogle>
                    </button>
                    <button>
                      <FaFacebookF
                        className="bg-blue-600 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-0 mb-1"
                        type="button"
                      ></FaFacebookF>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:mb-0 px-4 py-10 bg-gray-900 rounded-xl drop-shadow-xl">
              <div className="px-1">
                <img
                  alt="..."
                  src="https://i.ibb.co/qYKS03H/295067443-583001103433344-6366803930482406602-n.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Tausifur Rahman Mahim</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    UI/UX Designer
                  </p>
                  <div className="mt-6">
                    <button>
                      <FaGoogle
                        className="bg-red-600 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-3 mb-1"
                        type="button"
                      ></FaGoogle>
                    </button>
                    <button>
                      <FaTwitter
                        className="bg-blue-400 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-3 mb-1"
                        type="button"
                      ></FaTwitter>
                    </button>
                    <button>
                      <FaInstagram
                        className="bg-gray-800 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-0 mb-1"
                        type="button"
                      ></FaInstagram>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:mb-0 px-4 py-10 bg-gray-900 rounded-xl drop-shadow-xl">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://i.ibb.co/c6H7RR4/257306004-2961795554084630-7008722310318556040-n.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Mohammad Razin</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Founder and CEO
                  </p>
                  <div className="mt-6">
                    <button>
                      <FaDribbble
                        className="bg-pink-500 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-3 mb-1"
                        type="button"
                      ></FaDribbble>
                    </button>
                    <button>
                      <FaGoogle
                        className="bg-red-600 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-3 mb-1"
                        type="button"
                      ></FaGoogle>
                    </button>
                    <button>
                      <FaTwitter
                        className="bg-blue-400 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-3 mb-1"
                        type="button"
                      ></FaTwitter>
                    </button>
                    <button>
                      <FaInstagram
                        className="bg-gray-800 text-white w-8 h-8 rounded-xl outline-none focus:outline-none mr-0 mb-1"
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
