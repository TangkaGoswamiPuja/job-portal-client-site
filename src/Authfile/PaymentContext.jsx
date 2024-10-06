import React, { createContext, useState } from "react";

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [paymentDone, setPaymentDone] = useState(false);

  const completePayment = () => setPaymentDone(true);

  return (
    <PaymentContext.Provider value={{ paymentDone, completePayment }}>
      {children}
    </PaymentContext.Provider>
  );
};