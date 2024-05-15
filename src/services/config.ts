import axios, { AxiosError, AxiosResponse } from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com/" });

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error)
);

export default api;
