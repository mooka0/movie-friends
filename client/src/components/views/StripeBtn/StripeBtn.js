import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const stripeBtn = () => {
    const publishableKey = "pk_test_51Idm5GFYHKs1KtshrFOHkBz11aGOmDHIEzBvP2rtVSvfVVCRL1OEWY4XnTBez6RU0DArZUpXogW3O3UgrbrqDcSi00G2gt94ny";
     
    const onToken = token => {
      const body = {
        amount: 1000,
        token: token
    };

    axios
    .post("http://localhost:8000/payment", body)
    .then(response => {
      console.log(response);
      alert("Payment Success");
    })
    .catch(error => {
      console.log("Payment Error: ", error);
    //   alert("Payment Error");
    });
};

return (
    <StripeCheckout
      label="Donate" //Component button text
      name="Movie Friends" //Modal Header
      description="Donate to help fund our page."
      panelLabel="Donate" //Submit button in modal
      amount={1000} //Amount in cents $10.00
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};

export default stripeBtn;