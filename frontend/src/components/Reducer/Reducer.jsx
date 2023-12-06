import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
 const initialState={
    viewCart:[],
    addcart:[],
    cartStatus:'idle'
 };
 export const postCartProducts=createAsyncThunk('cart/post',async(obj)=>{
    const data=await axios.post("https://cart-swi5.onrender.com/api/cart/add-cart",obj);
    return data;
 });

 export const getCartProducts=createAsyncThunk('cart/get',async()=>{
    const data=await axios.get("https://cart-swi5.onrender.com/api/cart/view-cart");

    const result=data.data.data
    return result;
 });
 export const deleteCartProducts=createAsyncThunk('cart/delete',async(id)=>{
   const data=await axios.delete(`https://cart-swi5.onrender.com/api/cart/delete-product/${id}`);
   return data;
 })
 export const deleteAllCartProducts = createAsyncThunk('cart/deleteAll', async () => {
   const data = await axios.delete(`https://cart-swi5.onrender.com/api/cart/delete-all`);
   return data;
 });
 const cartSlice=createSlice ({
    name:'cart',
    initialState,

    extraReducers:(builder)=>{
       builder.addCase(postCartProducts.pending,(state,action)=>{
        state.cartStatus="loading"
       }) 
       .addCase(postCartProducts.fulfilled,(state,action)=>{
        state.addcart=action.payload; 
        state.cartStatus="idle"
    })
    .addCase(postCartProducts.rejected,(state,action)=>{
        state.cartStatus="error";

    })
    builder.addCase(getCartProducts.pending,(state,action)=>{
        state.cartStatus="loading"
       }) 
       .addCase(getCartProducts.fulfilled,(state,action)=>{
        state.viewCart=action.payload;
        state.cartStatus="idle"
    })
    .addCase(getCartProducts.rejected,(state,action)=>{
        state.cartStatus="error";

    })
       
    }
 })

 export default cartSlice.reducer;

 

