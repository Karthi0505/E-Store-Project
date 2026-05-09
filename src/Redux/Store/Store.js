import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/CategorySlice/CategorySlice";

export const store = configureStore({
    reducer: {
        categoryReducer : categorySlice
    }
    
})