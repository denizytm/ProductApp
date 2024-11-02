/* // src/modules/user/store/userSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserState } from '../types/userTypes';
import { fetchUsersF } from '../services/userApi';

// Async thunk to fetch user data

export const getUsersF = createAsyncThunk('users/fetchUsers', async () => {
    return await fetchUsersF();
});

const userInitialState = {
    users : [],
    loading : true,
    error : null
}

const userSlice = createSlice({
    name: 'users',
    userInitialState,
    reducers: {
        // Synchronous actions if needed
        getUsers
        createUser: (state,action) => {
            const newUser = action.payload.newUser;
            state.users = [...state.users,newUser]
        },
        updateUser : (state,action) => {
            state.users = state.users.map(user => {
                if(user.id === action.payload.updateUserId) return action.payload.updateUser;
                return user;
            })
        },
        deleteUser: (state,action) => {
            state.users = state.users.filter(user=>user.id != action.payload.deleteUserId);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.currentUser = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { 
    createUser,
} = userSlice.actions;
export default userSlice.reducer; */
