import React from "react";
import Review from "./Review";
import { FaAmazon } from "react-icons/fa";
function App() {
  return (
    <section className="container">
      <div className="title">
        <h2>Our reviews</h2>
        <div className="underline"></div>
      </div>
      <Review />
    </section>
  );
}

export default App;
