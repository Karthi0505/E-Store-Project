import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/CategorySlice/CategorySlice";
import productSlice from "../Product/ProductSlice/prdSlice";
import cartSlice from "../Cart/CartSlice";

export const store = configureStore({
    reducer: {
        categoryReducer : categorySlice,
        productReducer : productSlice,
        cartReducer : cartSlice,
    }
    
})