import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../ProductAction";

const initialState = {
  products: [],
  selectedCategoryId: null,
  status: "idle",
  error: "",
};

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
    filterByPrice: (state, action) => {
      const filteredData = action.payload.products.filter(
        (elem) => elem.price >= action.payload.min && elem.price <= action.payload.max
      );
      state.products = filteredData;
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export const { filterProducts, filterByPrice } = productSlice.actions;
export default productSlice.reducer;
