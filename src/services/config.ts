import { MESSAGES } from "@/constants/toast";
import { toast } from "@/lib/utils";
import axios, { AxiosError, AxiosResponse } from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com" });

// add slash to end of url
api.interceptors.request.use((config: any) => {
  config.url = `${config.url}/`;
  return config;
});

// show error in toast
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (!error.response) {
      toast(MESSAGES.error.networkConnection);
    } else {
      toast(MESSAGES.error.unexpectedError);
    }
    return Promise.reject(error);
  }
);

export default api;
