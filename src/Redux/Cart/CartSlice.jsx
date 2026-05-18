import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartItems: [],
    totalItemPrice:0,
    totalItems:0,
    totalQuantity:0
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addCartItems: (state, action) => {
            let item_exists = state.cartItems.find(item => item.id === action.payload.id);
            if(item_exists) {
                item_exists.quantity++;
                state.totalQuantity++;
                state.totalItemPrice += action.payload.price;
            } else {
                state.cartItems=[...state.cartItems,action.payload]
                state.totalItems = ++state.totalItems
                state.totalQuantity = ++ state.totalQuantity
                state.totalItemPrice = state.totalItemPrice + action.payload.price
            }
        }
    }
});

export const { addCartItems } = cartSlice.actions;
export default cartSlice.reducer;
