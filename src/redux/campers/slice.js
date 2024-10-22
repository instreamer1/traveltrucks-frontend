import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operation';

const initialState = {
  list: [],
  // page: 1,
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
      const exists = state.favorites.find(camper => camper.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(camper => camper.id !== action.payload);
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
        // console.log(action);
        state.isLoading = false;
        // state.list = action.payload.items;
        state.list = [...state.list, ...action.payload.items]
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

export const { setCurrentCarId, addFavorite, removeFavorite } = campersSlice.actions;
export default campersSlice.reducer;


// Функция для загрузки фильтров из localStorage
// const loadFiltersFromLocalStorage = () => {
//   try {
//     const serializedFilters = localStorage.getItem('filters');
//     if (serializedFilters === null) {
//       return {
//         location: '',
//         vehicleEquipment: {
//           AC: false,
//           kitchen: false,
//           TV: false,
//           bathroom: false,
//         },
//         vehicleType: '',
//       };
//     }
//     return JSON.parse(serializedFilters);
//   } catch (err) {
//     console.error('Ошибка при загрузке фильтров из localStorage', err);
//     return {
//       location: '',
//       vehicleEquipment: {
//         AC: false,
//         kitchen: false,
//         TV: false,
//         bathroom: false,
//       },
//       vehicleType: '',
//     };
//   }
// };

// Функция для сохранения фильтров в localStorage
// const saveFiltersToLocalStorage = (filters) => {
//   try {
//     const serializedFilters = JSON.stringify(filters);
//     localStorage.setItem('filters', serializedFilters);
//   } catch (err) {
//     console.error('Ошибка при сохранении фильтров в localStorage', err);
//   }
// };

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Использует localStorage

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['campers'], // Указываем, какие слайсы сохранять
// };

// const persistedReducer = persistReducer(persistConfig, campersReducer);

// const store = configureStore({
//   reducer: {
//     campers: persistedReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
// export default store;

// const initialState = loadFiltersFromLocalStorage();