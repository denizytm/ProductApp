// src/modules/user/store/productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsAPI } from '../services/productAPI';

// Async thunk to fetch product data

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    return await fetchProductsAPI();
});

const productInitialSlice = {
    products : [],
    categories : [],
    loading : true,
    error : false
}

const productSlice = createSlice({
    name: 'products',
    initialState : productInitialSlice,
    reducers: {
        // Synchronous actions if needed
        createProduct: (state,action) => {
            const newProduct = action.payload.newProduct;
            state.products = [...state.products,newProduct]
            if(!state.categories.includes(newProduct.category))
                state.categories = [...state.categories,newProduct.category];
        },
        createProducts: (state,action) => {
            action.payload.products.forEach(product=>{    
                state.products.push(product);
            }) 
        },
        updateProduct : (state,action) => {
            const updateProduct = action.payload.updateProduct;
            state.products = state.products.map(product => {
                if(product.id === updateProduct.id) return updateProduct;
                return product;
            })
            if(!state.categories.includes(updateProduct.category))
                state.categories = [...state.categories,updateProduct.category];
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
                let categoriesData = [];
                action.payload.forEach(data => {
                    if(!categoriesData.includes(data.category)) categoriesData.push(data.category);
                })
                state.categories = categoriesData;
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