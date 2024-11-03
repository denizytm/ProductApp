import { createSlice } from '@reduxjs/toolkit';

const favoriteInitialState = {
    favorites : [],
    loading : true,
    error : false
}

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState : favoriteInitialState,
    reducers: {
        // Synchronous actions if needed
        createFavorite: (state,action) => {
            const newProduct = action.payload.newProduct;
            const selectedBefore = state.favorites.find(data => data.id == newProduct.id);
            if(!selectedBefore)
                state.favorites = [...state.favorites,newProduct]
        },
        deleteFavorite: (state,action) => {
            state.favorites = state.favorites.filter(favorite=>favorite.id != action.payload.deleteFavoriteId);
        }
    },
});

export const { 
    createFavorite,
    deleteFavorite
} = favoriteSlice.actions;
export default favoriteSlice.reducer;