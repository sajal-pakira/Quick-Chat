import axios from "axios";

export const axiosInsatance = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});
