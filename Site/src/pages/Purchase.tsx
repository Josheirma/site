import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

const Purchase = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Purchase</h2>
      <p>Buy this product for $59.99</p>

      <PayPalButtons
        style={{ layout: "vertical" }}
        
        createOrder={() => {
          return fetch("http://localhost:3000/api/paypal/create-order", {
            method: "POST",
          })
            .then((res) => res.json())
            .then((data) => data.id);
        }}

        onApprove={(data) => {
          return fetch("http://localhost:3000/api/paypal/capture-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderID: data.orderID,
            }),
          })
            .then((res) => res.json())
            .then((details) => {
              console.log("Payment complete:", details);

              // 👉 redirect to your success page
              navigate("/success");
            });
        }}

        onError={(err) => {
          console.error("PayPal error:", err);
          alert("Something went wrong with payment.");
        }}
      />
    </div>
  );
};

export default Purchase;