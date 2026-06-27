import axios from "axios";

const api = axios.create({
  baseURL: "https://multi-tenant-ecommerce-backend.onrender.com/api",
  withCredentials: true,
});

export default api;
