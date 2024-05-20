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

const getProductDetails = async (id: string | undefined) => {
  try {
    const res = await api.get<ProductType>(`/products/${id}`);
    return {
      res,
    };
  } catch (error) {
    return {
      error: error as AxiosError,
    };
  }
};

export { getAllProducts, getProductDetails };
