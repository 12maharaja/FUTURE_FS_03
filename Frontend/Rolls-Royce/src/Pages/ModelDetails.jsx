import React from "react";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import { useParams, useNavigate } from "react-router-dom";

function ModelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Temporary static data
  const cars = [
    {
      id: 1,
      modelName: "Phantom",
      engineType: "V12",
      price: "$450,000",
      image: car1,
      description:
        "The Rolls-Royce Phantom is the epitome of luxury, offering unmatched elegance and a smooth V12 performance.",
    },
    {
      id: 2,
      modelName: "Ghost",
      engineType: "V12 Twin Turbo",
      price: "$350,000",
      image: car2,
      description:
        "The Ghost combines a contemporary design with cutting-edge technology for a refined driving experience.",
    },
    {
      id: 3,
      modelName: "Cullinan",
      engineType: "V12 SUV",
      price: "$400,000",
      image: car3,
      description:
        "Cullinan is the only SUV that truly embodies luxury, power, and comfort on any terrain.",
    },
  ];

  const car = cars.find((c) => c.id.toString() === id);

  if (!car) {
    return (
      <h2 style={{ color: "red", textAlign: "center" }}>Car not found!</h2>
    );
  }

  return (
    <div className="model-details">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          margin: "20px",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ⬅ Back
      </button>

      <div style={{ textAlign: "center" }}>
        <h1>{car.modelName}</h1>
        <img
          src={car.image}
          alt={car.modelName}
          style={{ width: "70%", borderRadius: "10px", margin: "20px 0" }}
        />
        <h3>Engine: {car.engineType}</h3>
        <h3>Price: {car.price}</h3>
        <p>{car.description}</p>

        {/* 🆕 Buy Now -> Booking Page */}
        <div className="model-cta">
          <button onClick={() => navigate("/booking", { state: { car } })}>
            🚘 Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModelDetails;
