import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "getProducts",
  async () => {
    const response = await fetch("http://localhost:5001/productCategories/getProducts");
    const productsData = await response.json();
    return productsData;
  }
);
