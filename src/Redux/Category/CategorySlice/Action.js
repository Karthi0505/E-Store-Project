import { createAsyncThunk } from "@reduxjs/toolkit";


export const getCategories = createAsyncThunk(
    'getCatgories',
    () => {
        const Categories = fetch("http://localhost:5001/productCategories")
        .then((response) => response.json())
        return Categories;
    }
)
