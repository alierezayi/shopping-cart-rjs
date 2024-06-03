import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/lib/types";
import api from "@/services/config";

type InitialStateType = {
  isLoading: boolean;
  products: ProductType[];
  error: string | null;
};

const initialState: InitialStateType = {
  isLoading: false,
  products: [],
  error: null,
};

const fetchProducts = createAsyncThunk<ProductType[]>(
  "product/fetchProducts",
  async () => api.get("/products")
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<ProductType[]>) => {
        state.isLoading = false;
        state.products = action.payload;
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default productSlice.reducer;
export { fetchProducts };
