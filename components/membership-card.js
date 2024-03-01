import React, { useState } from "react";


const MembershipCard = ({ title, price, features }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-300 bg-[#ffffff]  m-7 w-full p-4 mr-[40px] rounded-lg shadow-md mb-4">
      <div className="flex flex-col  justify-between items-center ">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-xl font-bold ">{price}/ Per Month</p>
        <p className="flex items-center text-center justify-center">Membership expires after 1 month</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
        >
          {isExpanded ? "Less" : "More"}
        </button>
      </div>
      {isExpanded && (
        <div className="mt-4">
          <ul className="list-disc pl-5">
            {features.map((feature, index) => (
              <li key={index} className="text-sm">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MembershipCard;
