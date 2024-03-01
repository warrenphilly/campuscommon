import React, { useState } from 'react';

const PaymentInformationForm = () => {
  const [payment, setPayment] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment({ ...payment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log(payment);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="cardName"
          value={payment.cardName}
          onChange={handleChange}
          placeholder="Name on Card"
          className="input-field"
        />
      </div>
      <div>
        <input
          type="text"
          name="cardNumber"
          value={payment.cardNumber}
          onChange={handleChange}
          placeholder="Card Number"
          className="input-field"
        />
      </div>
      <div>
        <input
          type="text"
          name="expiry"
          value={payment.expiry}
          onChange={handleChange}
          placeholder="MM/YY"
          className="input-field"
        />
      </div>
      <div>
        <input
          type="text"
          name="cvc"
          value={payment.cvc}
          onChange={handleChange}
          placeholder="CVC"
          className="input-field"
        />
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default PaymentInformationForm;