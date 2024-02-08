import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        updateCart: (state, data) => {
            console.log(data.payload);
            state.cart.push(data.payload)
           
        },
        removeFromCart: (state,data) => {
            console.log(data.payload);
            state.cart.splice(data.payload,1)

        }
    }
})

export const { updateCart, removeFromCart } = cartSlice.actions

export default cartSlice
