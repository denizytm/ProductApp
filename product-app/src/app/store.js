import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../modules/users/store/userSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
