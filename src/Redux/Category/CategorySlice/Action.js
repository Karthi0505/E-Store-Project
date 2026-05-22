import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    'getCategories',
    async () => {
        const response = await fetch("http://localhost:5001/productCategories");
        const Categories = await response.json();
        return Categories;
    }
)
