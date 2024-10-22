import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operation';

const initialState = {
  list: [],
  dataPage: 1,
  // limit: 4,
  totalItems: 0,
  isLoading: false,
  error: null,
  currentCarId: null,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
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
    setDataPage: (state, action) => {
      state.dataPage = action.payload;
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
        if (state.dataPage === 1) {
          state.list = action.payload.items;
        }

        state.list = [...state.list, ...action.payload.items];
        // state.list = [
        //   ...state.list,
        //   ...action.payload.items.filter(
        //     item => !state.list.some(existingItem => existingItem.id === item.id)
        //   )
        // ];
        state.totalItems = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentCarId, addFavorite, removeFavorite, setDataPage } =
  campersSlice.actions;
export default campersSlice.reducer;
