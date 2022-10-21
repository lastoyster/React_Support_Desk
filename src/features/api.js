import axios from "axios";
import { store } from "../app/store";
import { logout } from "./auth/authSlice";

// Create an instance of axios
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(err);
  }
);
export default api;
