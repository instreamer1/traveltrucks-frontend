import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operation';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    list: [],
    status: 'idle',
    loading: false,
    error: null,
    currentCarId: null,
    itemsPerPage: 4, 
    totalItems: 0, 
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],

 

  },
  reducers: {
    setItemsPerPage(state, action) {
      state.itemsPerPage = action.payload;
    },
    setCurrentCarId(state, action) {
      state.currentCarId = action.payload;
    },
    addFavorite(state, action) {
        const exists = state.favorites.find(camper => camper.id === action.payload.id);
        if (!exists) {
          state.favorites.push(action.payload);
          localStorage.setItem('favorites', JSON.stringify(state.favorites)); // Сохраните в localStorage
        }
      },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        camper => camper.id !== action.payload
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        // state.status = 'succeeded';
        state.loading = false;
        state.list = action.payload.items;
        // console.log(action.payload.items);
        state.totalItems = action.payload.total;
        // state.loading = false;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setCurrentCarId, addFavorite, removeFavorite, setItemsPerPage } =
  campersSlice.actions;
export default campersSlice.reducer;
