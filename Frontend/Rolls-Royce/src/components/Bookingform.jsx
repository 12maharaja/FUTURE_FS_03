import React, { useState } from "react";
import axios from "axios";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post("http://localhost:8080/api/bookings", form, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200 || res.status === 201) {
        setStatus("✅ Booking request submitted successfully!");
        setForm({ name: "", email: "", phone: "", model: "", date: "" });
      }
    } catch (err) {
      console.error("Error:", err);
      const errorMsg =
        err.response?.data?.message ||
        "❌ Failed to submit booking. Try again later.";
      setStatus(errorMsg);
    } finally {
      setLoading(false);

      // Auto-clear after 3s
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="booking-container" id="booking">
      <h2>Book a Test Drive</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <select
          name="model"
          value={form.model}
          onChange={handleChange}
          required
        >
          <option value="">Select Model</option>
          <option value="Phantom">Phantom</option>
          <option value="Ghost">Ghost</option>
          <option value="Cullinan">Cullinan</option>
          <option value="Spectre">Spectre</option>
        </select>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "⏳ Submitting..." : "Submit Booking"}
        </button>
      </form>

      {status && (
        <p
          className={`status ${status.startsWith("✅") ? "success" : "error"}`}
        >
          {status}
        </p>
      )}
    </div>
  );
}

export default BookingForm;
