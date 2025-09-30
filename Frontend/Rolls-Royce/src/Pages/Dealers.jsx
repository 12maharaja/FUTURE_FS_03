import React, { useState } from "react";
import fallbackMap from "../assets/fallback-map.jpg"; // 🆕 placeholder image (download and keep in assets)

function Dealers() {
  const [online] = useState(navigator.onLine); // 🆕 check internet available or not

  const dealers = [
    {
      id: 1,
      name: "Rolls-Royce Chennai",
      address: "Anna Salai, Chennai, Tamil Nadu",
      phone: "+91 98765 43210",
      map: "https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 2,
      name: "Rolls-Royce Mumbai",
      address: "Bandra Kurla Complex, Mumbai",
      phone: "+91 91234 56789",
      map: "https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 3,
      name: "Rolls-Royce Delhi",
      address: "Connaught Place, New Delhi",
      phone: "+91 99887 77665",
      map: "https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
  ];

  return (
    <div className="dealers-container" id="dealers">
      <h2>Find a Dealer</h2>
      <p className="dealers-subtitle">
        Locate our official Rolls-Royce dealerships across India.
      </p>
      <div className="dealers-grid">
        {dealers.map((dealer) => (
          <div key={dealer.id} className="dealer-card">
            <h3>{dealer.name}</h3>
            <p>{dealer.address}</p>
            <p>📞 {dealer.phone}</p>
            <div className="map-container">
              {online ? (
                <iframe
                  src={dealer.map}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title={dealer.name}
                ></iframe>
              ) : (
                <img
                  src={fallbackMap}
                  alt="Map not available offline"
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "8px",
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dealers;
