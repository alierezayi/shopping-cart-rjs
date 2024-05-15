import { ProductType } from "@/lib/types";
import api from "./config";
import { AxiosError } from "axios";

const getAllProducts = async () => {
  try {
    const res = await api.get<ProductType[]>("/products");
    return {
      res,
    };
  } catch (error) {
    return {
      error: error as AxiosError,
    };
  }
};

export { getAllProducts };
