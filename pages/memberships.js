
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Header from "../components/header";
import StudentMembership from "../components/student-membership";
import LandlordMembership from "../components/landlord-membership";

const stripePromise = loadStripe("pk_test_51OGsa7CUOP2vXz4ySCQ8rJcmwLqCCdbiNGxkmIliVtUiOM59qEYH0VMYoJBNYKCGvUVrLUaBEbXqOR1ihWEI145T00Zl9jUQcA");

const MembershipForm = () => {
  const [selectedRole, setSelectedRole] = useState("student");
  const [fadeClass, setFadeClass] = useState("opacity-100");

  const handleChangeRole = (role) => {
    // Start by fading out
    setFadeClass("opacity-0");

    // Wait for the fade out to complete, then change role and fade in
    setTimeout(() => {
      setSelectedRole(role);
      setFadeClass("opacity-100");
    }, 300); // Match this with your transition duration
  };

  return (
    <div className="relative bg-[#fbfbfb] w-full flex flex-col items-center justify-start">
      <Header />
      <div className="toggle-switch flex justify-center gap-4 my-4">
        <button
          onClick={() => handleChangeRole("student")}
          className={`px-4 py-2 transition duration-300 ${selectedRole === "student" ? "bg-red-500 text-white" : "bg-gray-200 text-grey-500 "}`}
        >
          Student
        </button>
        <button
          onClick={() => handleChangeRole("landlord")}
          className={`px-4 py-2 transition duration-300 ${selectedRole === "landlord" ? "bg-red-500 text-white" : "bg-gray-200"}`}
        >
          Landlord
        </button>
      </div>
      <div className={`transition-opacity duration-300 ${fadeClass}`}>
        {selectedRole === "student" ? <StudentMembership /> : <Elements stripe={stripePromise}>
        <LandlordMembership   />
      </Elements>}
      </div>
    </div>
  );
};

export default MembershipForm;