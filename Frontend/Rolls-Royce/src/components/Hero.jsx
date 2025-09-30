import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const scrollToAbout = () => {
    const about = document.getElementById("about");
    if (about) about.scrollIntoView({ behavior: "smooth" });
  };

  const goToBooking = () => {
    navigate("/booking"); // ✅ Navigate to Booking Page
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Rolls-Royce</h1>
        <p>Inspiring Greatness</p>
        <div className="hero-buttons">
          <button onClick={scrollToAbout}>Discover More</button>
          <button className="secondary" onClick={goToBooking}>
            Book a Test Drive
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
