import React from "react";

function Footer() {
  return (
    <footer>
      <h2>Rolls-Royce Motor Cars</h2>
      <p>
        Crafting the world’s most luxurious motor cars since 1904. <br />
        Bespoke elegance, innovation, and timeless heritage.
      </p>

      <div className="footer-links">
        <a href="#models">Models</a>
        <a href="#bespoke">Bespoke</a>
        <a href="#heritage">Heritage</a>
        <a href="#dealers">Dealers</a>
      </div>

      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          🌐
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          📷
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          ▶
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          💼
        </a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Rolls-Royce Motor Cars. All Rights
        Reserved.
      </p>
    </footer>
  );
}

export default Footer;
