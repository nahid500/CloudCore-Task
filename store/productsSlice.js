import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const res = await axios.get('https://admin.refabry.com/api/all/product/get');
        return res.data.data.data;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        throw error;
    }
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],  
        status: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload || []; 
                state.status = 'succeeded';
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default productsSlice.reducer;
