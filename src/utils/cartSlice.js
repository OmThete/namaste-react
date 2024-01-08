import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItems: (state,action)=>{
            //Mutating the state based on action
            state.items.push(action.payload)
        },
        removeItems:(state,action)=> {
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length = 0
        }
    }
})

export const {addItems,removeItems,clearCart} = cartSlice.actions;

export default cartSlice.reducer;