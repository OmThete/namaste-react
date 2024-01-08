import { configureStore } from "@reduxjs/toolkit";
import cartRedcuer from './cartSlice'

const appStore = configureStore({
    reducer:{
        cart: cartRedcuer,
    },
});
export default appStore;