import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { hideSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={hideSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe's software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">start now</button>
        </article>
        <article className="hero-images">
          <img className="phone-img" src={phoneImg} alt="" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
