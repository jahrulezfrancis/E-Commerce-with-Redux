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

        },
        setShowCart(state) {
            state.ShowCart = true;
        },
    }
})

export const CartAction = CartSlice.actions;

export default CartSlice;