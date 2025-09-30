import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post(
        "http://localhost:8080/api/contact",
        formData,
        {
          headers: { "Content-Type": "application/json" }, // ✅ safer
        }
      );

      if (res.status === 200 || res.status === 201) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // clear only on success
      }
    } catch (err) {
      console.error("Error:", err);
      const errorMsg =
        err.response?.data?.message || "❌ Failed to send. Try again later.";
      setStatus(errorMsg);
    } finally {
      setLoading(false);

      // Auto clear status after 3s
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="contact-container" id="contact">
      <h2>Contact Us</h2>
      <p className="contact-subtitle">
        Have questions? Send us a message and we’ll get back to you.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "⏳ Sending..." : "Send Message"}
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

export default ContactForm;
