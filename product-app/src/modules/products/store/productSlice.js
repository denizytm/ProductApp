// src/modules/user/store/productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsAPI } from '../services/productAPI';

// Async thunk to fetch product data

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    return await fetchProductsAPI();
});

const productInitialSlice = {
    products : [],
    loading : true,
    error : false
}

const productSlice = createSlice({
    name: 'products',
    initialState : productInitialSlice,
    reducers: {
        // Synchronous actions if needed
        getProducts: (state,action) => {
            return state.products;
        },
        createProduct: (state,action) => {
            const newProduct = action.payload.newProduct;
            state.products = [...state.products,newProduct]
        },
        createProducts: (state,action) => {
            action.payload.products.forEach(product=>{    
                state.products.push(product);
            }) 
        },
        updateProduct : (state,action) => {
            state.products = state.products.map(product => {
                if(product.id === action.payload.updateProductId) return action.payload.updateProduct;
                return product;
            })
        },
        deleteProduct: (state,action) => {
            state.products = state.products.filter(product=>product.id != action.payload.deleteProductId);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { 
    getProducts,
    createProduct,
    createProducts,
    updateProduct,
    deleteProduct
} = productSlice.actions;
export default productSlice.reducer;