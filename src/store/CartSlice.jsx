import { createSlice } from "@reduxjs/toolkit"

const CartSlice = createSlice({
    name: 'Cart',
    initialState: {
        ItemList: [],
        TotalQuantity: 0,
        ShowCart: false
    },
    reducers: {
        AddToCart(state, action) {
            const newItem = action.payload;

            //checking item is already avalable incart

            const existingItem = state.ItemList.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.qauntity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.ItemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    qauntity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                });
                state.TotalQuantity++;
            }
        },
        RemoveFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.ItemList.find(item => item.id === id);
            if (existingItem.qauntity === 1) {
                state.ItemList = state.ItemList.filter(item => item.id !== id)
                state.TotalQuantity--;
            } else {
                existingItem.qauntity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        setShowCart(state) {
            state.ShowCart = !state.ShowCart;
        },
    }
})

export const CartAction = CartSlice.actions;

export default CartSlice;