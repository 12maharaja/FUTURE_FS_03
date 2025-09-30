import React, { useEffect, useState } from "react";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import { getModels } from "../services/api";


function Model() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getModels()
      .then((res) => setCars(res.data))
      .catch(() => {
        setCars([
          {
            id: 1,
            modelName: "Phantom",
            engineType: "V12",
            price: "450000",
            image: car1,
          },
          {
            id: 2,
            modelName: "Ghost",
            engineType: "V12 Twin Turbo",
            price: "350000",
            image: car2,
          },
          {
            id: 3,
            modelName: "Cullinan",
            engineType: "V12 SUV",
            price: "400000",
            image: car3,
          },
        ]);
      });
  }, []);

  return (
    <section className="model-section" id="models">
      <h2>Our Models</h2>

      <div className="model-grid">
        {cars.map((car) => (
          <div key={car.id} className="model-card">
            <img src={car.image} alt={car.modelName} />
            <h3>{car.modelName}</h3>
            <p>Engine: {car.engineType}</p>
            <p>Price: ${car.price}</p>
            <button
              onClick={() => (window.location.href = `/models/${car.id}`)}
              style={{
                marginTop: "10px",
                padding: "8px 15px",
                border: "none",
                background: "black",
                color: "white",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Model;
