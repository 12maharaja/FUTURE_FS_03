import axios from "axios";

// 🔗 Backend base URL
const API = axios.create({
  baseURL: "http://localhost:8080/api", // Spring Boot API
});

// 🚘 Get all models
export const getModels = () => API.get("/models");

// 📝 Post booking form
export const createBooking = (data) => API.post("/bookings", data);

// 🏢 Get dealers
export const getDealers = () => API.get("/dealers");

// 🔧 For bespoke options (future)
export const getBespokeOptions = () => API.get("/bespoke");
