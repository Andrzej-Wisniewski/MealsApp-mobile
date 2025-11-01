import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  ids: string[];
}

const initialState: FavoritesState = {
  ids: [],
};

const favoritesSlices = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      if (!state.ids.includes(action.payload.id)) {
        state.ids.push(action.payload.id);
      }
    },
    removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.filter((mealId) => mealId !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlices.actions;
export default favoritesSlices.reducer;
