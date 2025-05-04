import React from "react";
import { Link } from "react-router-dom";

const BecomeTutor = () => {
  return (
    <div className="bg-white dark:bg-black py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-4">
          Become a Tutor
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Join our platform and help students succeed while growing your teaching skills. Apply now to become a tutor and make a difference in the education community.
        </p>

        <div className="flex justify-center gap-6">
          
          <Link
            href="/apply"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Apply Now
          </Link>
          
          {/* Learn More Button */}
          <Link
            href="/learn-more"
            className="inline-block px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
      
      
      <div className="mt-12 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Flexible Hours</h3>
          <p className="text-gray-600 dark:text-gray-300">Set your own hours and teach at your convenience.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Competitive Pay</h3>
          <p className="text-gray-600 dark:text-gray-300">Earn a competitive hourly rate and get paid on time.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Grow Your Skills</h3>
          <p className="text-gray-600 dark:text-gray-300">Enhance your teaching and communication skills.</p>
        </div>
      </div>
    </div>
  );
};

export default BecomeTutor;
