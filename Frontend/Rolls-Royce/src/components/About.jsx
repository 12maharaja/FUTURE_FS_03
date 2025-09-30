import React from "react";
import legacy from "../assets/legacy.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Rolls-Royce</h2>
          <p>
            Rolls-Royce is more than just a car brand – it’s a symbol of
            innovation, luxury, and timeless craftsmanship. For over a century,
            we have been redefining the meaning of excellence, blending
            cutting-edge technology with hand-built perfection.
          </p>
          <p>
            Every Rolls-Royce is designed to inspire greatness and deliver
            extraordinary experiences. Step into a world where performance meets
            elegance, and dreams meet reality.
          </p>
          <p>
            From the legendary <strong>Spirit of Ecstasy</strong> to the quiet
            whisper of our iconic V12 engines, each masterpiece reflects a
            pursuit of perfection. Our bespoke program allows every customer to
            personalize their Rolls-Royce, making each car as unique as its
            owner.
          </p>
          <p>
            With a heritage of prestige and a future driven by innovation, we
            continue to set new standards in the world of luxury motoring.
            Rolls-Royce isn’t just about driving — it’s about experiencing a
            journey like no other.
          </p>
        </div>

        <div className="about-image">
          <img src={legacy} alt="Rolls-Royce Legacy" />
        </div>
      </div>
    </section>
  );
}

export default About;
