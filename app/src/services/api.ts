import axios from "axios";

export const apiParallelum = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1",
  timeout: 10000,
});

export const apiToLogin = axios.create({
  baseURL: "https://test-api-y04b.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
