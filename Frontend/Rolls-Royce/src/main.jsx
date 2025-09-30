import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./css/Hero.css";
import "./css/Bookingform.css";
import "./css/Footer.css";
import "./css/Hero.css";
import "./css/Navbar.css";
import "./css/AdminDashbord.css";
import "./css/Bespoke.css";
import "./css/Dealers.css";
import "./css/Home.css";
import "./css/Model.css";
import "./css/ModelDetail.css";
import "./css/Heritage.css";
import "./css/Contact.css";
import "./css/About.css";
import Home from "./Pages/Home";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  </StrictMode>
);
