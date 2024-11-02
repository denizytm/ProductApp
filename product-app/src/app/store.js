import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../modules/users/store/userSlice';
import productReducer from '../modules/products/store/productSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    products : productReducer
  },
});

export default store;