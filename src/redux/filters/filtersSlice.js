import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  location: '',
  vehicleEquipment: {
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  },
  vehicleType: '',
  page: 1,
  limit: 4,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => {
      return {...initialState };
    },
    setPage(state, action) {
      console.log(action.payload);
      state.page = action.payload;
    },
  },
});

export const { setFilters, resetFilters, setPage } = filtersSlice.actions;
export default filtersSlice.reducer;
