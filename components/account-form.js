import React, { useState } from "react";

const AccountInformationForm = () => {
  const [account, setAccount] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log(account);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-white shadow-md rounded flex flex-col items-center px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl mb-6 font-semibold">Account Information</h2>
        <div className="flex flex-row ">
          <input
            type="text"
            name="username"
            value={account.username}
            onChange={handleChange}
            placeholder="Username"
            className="input-field"
          />
          <input
            type="email"
            name="email"
            value={account.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="input-field"
          />
        </div>

        <div className="flex flex-row">
          <input
            type="text"
            name="firstName"
            value={account.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="input-field"
          />
          <input
            type="text"
            name="lastName"
            value={account.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="input-field"
          />
        </div>

        <div className="flex flex-row">
          <input
            type="password"
            name="password"
            value={account.password}
            onChange={handleChange}
            placeholder="Password"
            className="input-field"
          />
          <input
            type="password"
            name="confirmPassword"
            value={account.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="input-field"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AccountInformationForm;
