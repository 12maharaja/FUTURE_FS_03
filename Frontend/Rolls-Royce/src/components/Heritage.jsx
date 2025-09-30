import React from "react";
import phantom from "../assets/phantom.jpg";
import silver from "../assets/silver.jpg";

function Heritage() {
  return (
    <section className="heritage" id="heritage">
      <h2>Our Heritage</h2>
      <p>
        Since 1904, Rolls-Royce has defined luxury and engineering excellence.
        From the legendary Silver Ghost to today’s Phantom, our heritage is the
        foundation of inspiring greatness.
      </p>
      <div className="heritage-images">
        <img
          src={phantom}
          alt="Rolls-Royce Silver Ghost"
        />
        <img
          src={silver}
          alt="Rolls-Royce Phantom I"
        />
      </div>
    </section>
  );
}

export default Heritage;
