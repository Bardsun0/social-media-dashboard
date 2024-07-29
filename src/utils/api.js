import axios from "axios";

const api = axios.create({
  baseURL: "API_BASE_URL", // API base URL'inizi buraya ekleyin
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response ? error.response.data : error)
);

export default api;
