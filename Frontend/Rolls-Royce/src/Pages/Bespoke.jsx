import React from "react";
import custom from "../assets/custom Exterior.jpg";
import luxury from "../assets/Luxury Interior.jpg";
import starlight from "../assets/Starlight Headliner.jpg";
import color from "../assets/color.jpg";

function Bespoke() {
  const options = [
    {
      id: 1,
      title: "Custom Exterior",
      desc: "Choose from exclusive paint finishes and luxury trims.",
      img: custom,
    },
    {
      id: 2,
      title: "Luxury Interior",
      desc: "Hand-crafted leather, wood veneers, and personalized details.",
      img: luxury,
    },
    {
      id: 3,
      title: "Starlight Headliner",
      desc: "Experience a star-filled night sky with fiber-optic lighting.",
      img: starlight,
    },
    {
      id: 4,
      title: "Color & Finish",
      desc: "Over 44,000 color choices to reflect your unique personality.",
      img: color,
    },
  ];

  return (
    <div className="bespoke-container" id="bespoke">
      <h2>Bespoke Customization</h2>
      <p className="bespoke-subtitle">
        Tailor your Rolls-Royce to perfection with unmatched personalization.
      </p>
      <div className="bespoke-grid">
        {options.map((opt) => (
          <div key={opt.id} className="bespoke-card">
            <img src={opt.img} alt={opt.title} />
            <h3>{opt.title}</h3>
            <p>{opt.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bespoke;
