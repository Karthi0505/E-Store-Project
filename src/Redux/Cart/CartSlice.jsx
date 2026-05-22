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
            const productId = action.payload.id || action.payload.product_id;
            let item_exists = state.cartItems.find(item => (item.id || item.product_id) === productId);
            if(item_exists) {
                item_exists.quantity++;
                state.totalQuantity++;
                state.totalItemPrice += Number(action.payload.price);
            } else {
                state.cartItems=[...state.cartItems,{...action.payload, quantity: 1}]
                state.totalItems = ++state.totalItems
                state.totalQuantity = ++ state.totalQuantity
                state.totalItemPrice = state.totalItemPrice + Number(action.payload.price)
            }
        },
        removeCartItems: (state, action) => {
            const productId = action.payload.id || action.payload.product_id;
            const item_exists = state.cartItems.find(item => (item.id || item.product_id) === productId);

            if(item_exists) {
                state.totalQuantity--;
                state.totalItemPrice -= Number(item_exists.price);

                if(item_exists.quantity > 1) {
                    item_exists.quantity--;
                } else {
                    state.cartItems = state.cartItems.filter(item => (item.id || item.product_id) !== productId);
                    state.totalItems--;
                }
            }
        },
        deleteCartItem: (state, action) => {
            const productId = action.payload.id || action.payload.product_id;
            const item_exists = state.cartItems.find(item => (item.id || item.product_id) === productId);

            if(item_exists) {
                state.totalQuantity -= item_exists.quantity || 1;
                state.totalItemPrice -= Number(item_exists.price) * (item_exists.quantity || 1);
                state.totalItems--;
                state.cartItems = state.cartItems.filter(item => (item.id || item.product_id) !== productId);
            }
        }
    }
});

export const { addCartItems, removeCartItems, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;
