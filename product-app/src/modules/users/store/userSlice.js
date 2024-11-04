// src/modules/user/store/userSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsersFromAPI } from '../services/userApi';

// Async thunk to fetch user data

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    return await fetchUsersFromAPI();
});

const userInitialState = {
    users : [],
    loading : true,
    error : false
}

const userSlice = createSlice({
    name: 'users',
    initialState : userInitialState,
    reducers: {
        // Synchronous actions if needed
        createUser: (state,action) => {
            const newUser = action.payload.newUser;
            state.users = [...state.users, {...newUser, id : state.users.length + 1}]
        },
        createUsers: (state,action) => {
            action.payload.users.forEach(user=>{    
                state.users.push(user);
            }) 
        },
        updateUser : (state,action) => {
            const updateUser = action.payload.updateUser;
            state.users = state.users.map(user => {
                if(user.id == updateUser.id) return updateUser;
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
                state.users = [...action.payload];
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { 
    createUser,
    createUsers,
    updateUser,
    deleteUser
} = userSlice.actions;
export default userSlice.reducer;