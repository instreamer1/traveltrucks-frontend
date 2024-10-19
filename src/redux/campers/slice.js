import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operation';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
  currentCarId: null,
  itemsPerPage: 4,
  totalItems: 0,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setItemsPerPage(state, action) {
      state.itemsPerPage = action.payload;
    },
    setCurrentCarId(state, action) {
      state.currentCarId = action.payload;
    },
    addFavorite(state, action) {
      const exists = state.favorites.find(
        camper => camper.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        camper => camper.id !== action.payload
      );
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload.items;
        state.totalItems = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setCurrentCarId,
  addFavorite,
  removeFavorite,
  setItemsPerPage,
} = campersSlice.actions;
export default campersSlice.reducer;
