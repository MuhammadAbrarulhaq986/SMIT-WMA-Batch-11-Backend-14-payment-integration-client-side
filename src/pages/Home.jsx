import React, { useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const Home = () => {
  const cartItems = [
    {
      id: 1,
      name: "Laptop",
      quantity: 1,
      price: 999.99,
    },
    {
      id: 2,
      name: "Wireless Mouse",
      quantity: 2,
      price: 25.5,
    },
    {
      id: 3,
      name: "Keyboard",
      quantity: 1,
      price: 49.99,
    },
    {
      id: 4,
      name: "USB-C Cable",
      quantity: 3,
      price: 15.0,
    },
    {
      id: 5,
      name: "Headphones",
      quantity: 1,
      price: 199.99,
    },
  ];
  const [item, setItem] = useState([...cartItems]);

  const payNow = async () => {
    const stripe = await loadStripe(
      "pk_test_51QatCqQ1H6Twskvkn5RElbKG5vuFBj2n3R98XvvbRCCf1Y0nCBUYXzyim4wWnl47n3RFXMud884DiP4dUZUmzcC300TsBp7wta"
    );

    const response = await axios.post(
      "http://localhost:3000/api/v1/checkout", //* Fixed URL
      {
        products: item,
      }
    );

    console.log(response.data.id);

    //* Initialize the redirect to Stripe's checkout page
    //* Pass the session ID received from our backend API
    //* This connects our checkout session to Stripe's payment flow
    const result = stripe.redirectToCheckout({
      sessionId: response.data.id,
    });
  };

  const increaseQuantity = (index) => {
    (item[index].quantity += 1), setItem([...item]);
  };
  const decreaseQuantity = (index) => {
    (item[index].quantity -= 1), setItem([...item]);
  };
  const deleteItem = (index) => {
    item.splice(index, 1), setItem([...item]);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f8f0",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#2e7d32",
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "30px",
        }}
      >
        Bhai Ki Markit
      </h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {item.map((item, index) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #4caf50",
              borderRadius: "8px",
              padding: "20px",
              backgroundColor: "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                color: "#1b5e20",
                fontWeight: "bold",
              }}
            >
              {item.name}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <button
                onClick={() => decreaseQuantity(index)}
                style={{
                  backgroundColor: "#81c784",
                  border: "none",
                  borderRadius: "4px",
                  padding: "8px 12px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                -
              </button>

              <p
                style={{
                  margin: "0 10px",
                  fontSize: "1.1rem",
                }}
              >
                Quantity: {item.quantity}
              </p>

              <button
                onClick={() => increaseQuantity(index)}
                style={{
                  backgroundColor: "#81c784",
                  border: "none",
                  borderRadius: "4px",
                  padding: "8px 12px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                +
              </button>
            </div>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#2e7d32",
              }}
            >
              Price {item.price * item.quantity}
            </p>

            <button
              onClick={() => deleteItem(index)}
              style={{
                backgroundColor: "#e8f5e9",
                border: "1px solid #c8e6c9",
                borderRadius: "4px",
                padding: "8px 16px",
                cursor: "pointer",
                color: "red",
              }}
            >
              Delete
            </button>
          </div>
        ))}

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <button
            onClick={payNow}
            style={{
              backgroundColor: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "15px 40px",
              fontSize: "1.2rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
              ":hover": {
                backgroundColor: "#1b5e20",
              },
            }}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
