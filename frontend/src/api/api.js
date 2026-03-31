import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

api.interceptors.response.use((response) => {
  return response.data.data;
});

export default api;