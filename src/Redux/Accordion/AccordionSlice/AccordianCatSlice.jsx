import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        category: "Men",
        items: ["Shirts", "Tshirts", "Jeans", "Trousers", "Jackets"]
    },
    {
        category: "Women",
        items: ["Dresses", "Tops", "Skirts", "Jeans", "Jackets"]
    },
    {
        category: "Kids",
        items: ["Shirts", "Tshirts", "Jeans", "Trousers", "Jackets"]
    }
]

const accordionCatSlice = createSlice({
    name: "AccordionSlice",
    initialState
});

export default accordionCatSlice;

