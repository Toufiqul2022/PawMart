import axios from "axios";

// Use .env (VITE_API_URL). Fallback works for local dev.
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const api = axios.create({
  baseURL,
});

export default api;
