import axios from "axios";

// Use environment variable for API URL
const api = axios.create({
  baseURL: https://shop-nodejs-2.vercel.app/,
  withCredentials: true, // if your backend uses cookies
});

// Attach token if exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

