import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../modules/users/store/userSlice';
import productReducer from '../modules/products/store/productSlice';
import favoriteReducer from '../modules/favorites/store/favoriteSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    products : productReducer,
    favorites : favoriteReducer
  },
});

export default store;