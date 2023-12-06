import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "../Reducer/Reducer";

const store=configureStore({
reducer:{
    cart:CardSlice
}
})

export default store;