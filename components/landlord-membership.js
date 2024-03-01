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
     tierClass: "landlord",
     price: "$54.99",
     title: "Bronze",
     link: "https://buy.stripe.com/test_eVa9Ce2gTgKu8kE4gk",
     features: [
       "We find tenants for each of your rooms by leveraging our network of undergraduate and graduate students seeking housing, charging a fee of $55 per room.",
     ],
   },
   {
     id: "silver",
     tierClass: "landlord",
     price: "$99.99",
     title: "Silver",
     link: "https://buy.stripe.com/test_dR69Ce7Bd51MbwQaEJ",
     features: [
       "In our Silver package, you'll begin with receiving a comprehensive form to articulate your specific requirements for each tenant, covering financial, scholastic, and habitual criteria you want met. Following this, our team conducts a rigorous vetting process to ensure that potential tenants align seamlessly with your preferences. Finally, we facilitate the connection between you and your prospective tenants. Additionally, we take it a step further by actively running targeted advertisements for your available rooms across various social media platforms, ensuring increased exposure and engagement, all while maintaining the core services of our Silver package for your convenience ($100 per room).",
     ],
   },
   {
     id: "gold",
     tierClass: "landlord",
     price: "$149.99",
     title: "Gold",
     link: "https://buy.stripe.com/test_3cs4hU1cP3XI7gAfZ4",
     features: [
       "Step up to our Gold package for a premium tenant-finding experience that takes your housing search to the next level. With the Gold package, we provide you with a comprehensive form to specify your unique criteria for each tenant, including financial, scholastic, and habitual preferences. We thoroughly vet potential tenants to ensure they align with your needs and desires. What sets the Gold package apart is the addition of professional room photography, where our skilled photographers capture the best features of each room, making your listings more appealing. Furthermore, we actively run targeted advertising campaigns on prominent social media platforms, maximizing the visibility of your listings and connecting with a wider audience of potential tenants. Elevate your tenant-finding process with our Gold package, which combines room photography and social media advertising, enhancing the effectiveness of filling your rooms swiftly and efficiently. ($200 per room)",
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
          Landlord Memberships
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
              <p className="text-[23px] text-red-800">{tier.price}/ Per Month</p>
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
                {expandedTier === tier.id ? "Show Less" : "Show More"}
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
            {selectedTier ? "Continue to Payment" : "Select Membership"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentMembership;





