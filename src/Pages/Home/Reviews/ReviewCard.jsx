import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
   const { userName, review: userRevies, user_photoURL } = review;
  
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 space-y-4 relative">
      {/* Quote icon (inside, not overflowing) */}
      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
        <FaQuoteLeft className="text-teal-600 text-xl" />
      </div>

      {/* Text */}
      <p className="text-gray-600 leading-relaxed">{userRevies}</p>

      {/* Dotted line */}
      <div className="border-b border-dotted border-gray-300"></div>

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full  bg-teal-800">
          <img className="rounded-full" src={user_photoURL} alt="" />
        </div>

        <div>
          <h4 className="font-semibold text-gray-800">{userName}</h4>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;