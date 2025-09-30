import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Model from "../Pages/Model";
import Bespoke from "../Pages/Bespoke";
import Dealers from "../Pages/Dealers";
import BookingForm from "../components/BookingForm";
import ModelDetails from "../Pages/ModelDetails";
import Heritage from "../components/Heritage";
import Footer from "../components/Foooter";
import ContactForm from "./Contact";
import About from "../components/About"; // ✅ About.jsx import

function Home() {
  return (
    <Routes>
      {/* 🏠 Main Home Page */}
      <Route
        path="/"
        element={
          <div className="home-container">
            <Navbar />
            <Hero />
            <About /> {/* ✅ Added About Section */}
            <Model />
            <Bespoke />
            <Heritage />
            <Dealers />
            <ContactForm />
            <Footer />
          </div>
        }
      />

      {/* 🚘 Car Details Page */}
      <Route path="/models/:id" element={<ModelDetails />} />

      {/* 📝 Booking Form Page */}
      <Route path="/booking" element={<BookingForm />} />
    </Routes>
  );
}

export default Home;
