import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const res = await axios.get('https://admin.refabry.com/api/all/product/get');
        return res.data.data.data;
    } catch (error) {
        console.log(error);
    }
});

export const placeOrder = createAsyncThunk('order/placeOrder', async (data) => {
    try {
        const res = await axios.post('https://admin.refabry.com/api/public/order/create', data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
});


const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],  
        status: 'idle',
        orderStatus: 'idle',
        orderData: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        //fetch
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload; 
                state.status = 'succeeded';
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'failed';
            })


         //order
            .addCase(placeOrder.pending, (state) => {
                state.orderStatus = 'loading';
            })
            .addCase(placeOrder.fulfilled, (state, action) => {
                state.orderStatus = 'succeeded';
                state.orderData = action.payload;
            })
            .addCase(placeOrder.rejected, (state) => {
                state.orderStatus = 'failed';
            })

    },
});







export default productsSlice.reducer;
