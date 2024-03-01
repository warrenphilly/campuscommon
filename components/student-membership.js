import React, { useState, useEffect } from "react";
import Header from "../components/header";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const StudentMembership = () => {
  const [expandedTier, setExpandedTier] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);
  const [tierPrice, setTierPrice] = useState(null);
  const [tierClass, setTierClass] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    selectedTier: null,
    price: null,
    tierClass: null,
  });
  useEffect(() => {
    setFormData((formData) => ({
      ...formData,
      selectedTier: selectedTier,
      price: tierPrice,
      tierClass: tierClass,
    }));
  }, [selectedTier, tierPrice, tierClass]);

  const membershipTiers = [
    {
      id: "bronze",
      tierClass: "student",
      price: "$21.99",
      title: "Bronze",
      link: "https://buy.stripe.com/test_28o15I8Fh79UeJ28wz",
      features: [
        "Receive six listings via email, precisely matching your specified criteria, ensuring you have a curated selection to choose from.",
      ],
    },
    {
      id: "silver",
      tierClass: "student",
      price: "$34.99",
      title: "Silver",
      link: "https://buy.stripe.com/test_dR6g0C2gTgKueJ29AC",
      features: [
        "Enjoy unlimited listings, all tailored to your specific criteria. We take it a step further by personally visiting potential homes to verify their legitimacy and accuracy. You can be confident that the homes you consider are as advertised.",
      ],
    },
    {
      id: "gold",
      tierClass: "student",
      price: "$54.99",
      title: "Gold",
      link: "https://buy.stripe.com/test_9AQ9Ce1cP51M1WgdQR",
      features: [
        "Enjoy unlimited listings, all tailored to your specific criteria. We take it a step further by personally visiting potential homes to verify their legitimacy and accuracy. You can be confident that the homes you consider are as advertised.",
      ],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No need to log to console in production code
    // Redirect based on selectedTier
    const tier = membershipTiers.find((tier) => tier.id === selectedTier);
    if (tier) {
      window.location.href = tier.link; // Redirect user to the corresponding link
    } else {
      alert("Please select a membership tier."); // Inform the user to select a tier if none is selected
    }
  };
  const toggleExpansion = (id) => {
    setExpandedTier((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-screen h-screen">
      <div className="  bg-[#fafafa] h-full">
        <h1 className="text-[30px] flex justify-center items-center font-semibold mb-6 w-screen text-red-500">
          Student Memberships
        </h1>
        <h2 className="text-[30px] flex justify-center items-center font-semibold mb-6 w-full ">
          Choose your membership
        </h2>
        <div className="   max-h-[800px] h-full flex flex-row justify-center items-center md:flex-col gap-4 mx-6  ">
          {membershipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`p-4 border-2 shadow-2xl w-full flex flex-col items-center justify-center h-[500px]  bg-[#ffffff] max-w-[400px] cursor-pointer ${
                selectedTier === tier.id
                  ? "border-red-500 bg-red-100"
                  : "border-gray-300"
              } rounded-lg transition-all duration-500 ease-in-out`}
              onClick={() => {
                setSelectedTier(tier.id);
                setTierPrice(tier.price);
                setTierClass(tier.tierClass);
              }}
            >
              <h2 className="text-2xl font-semibold">{tier.title}</h2>
              <p className="text-lg">{tier.price}/ Per Month</p>
              <div
                className={`transition-[max-height] duration-400 ease-in-out overflow-hidden ${
                  expandedTier === tier.id ? "max-h-96" : "max-h-0"
                }`}
              >
                {tier.features.map((feature, index) => (
                  <p key={index} className="text-sm text-gray-600 mt-4">
                    {feature}
                  </p>
                ))}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the tier selection from toggling when clicking the button
                  toggleExpansion(tier.id);
                }}
                className="py-2 px-4 underline cursor-pointer bg-white text-red-500 rounded hover:text-red-700 transition duration-300 mt-4"
                type="button"
              >
                {expandedTier === tier.id ? "Continue to Payment" : "Show More"}
              </button>
            </div>
          ))}
        </div>
        <div className="w-full h-[90px]  flex items-center justify-center">
          {/* Remove the <a> tags for Bronze, Silver, and Gold */}
          <button
            onClick={handleSubmit}
            className={`submit-button  text-lg text-grey-700  rounded-2xl h-[50px] w-[25%] ${
              selectedTier
                ? "bg-red-500 text-white shadow-2xl hover:bg-red-700"
                : " cursor-not-allowed bg-[#e2e2e2] "
            }`} // Dynamic class application
            type="button"
            disabled={!selectedTier} // The button is disabled if no tier is selected
          >
            {selectedTier ? "Submit" : "Select Membership"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentMembership;
