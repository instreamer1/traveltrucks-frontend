import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  vehicleEquipment: {
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  },
  vehicleType: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => ({
      location: '',
      vehicleEquipment: {
        AC: false,
        kitchen: false,
        TV: false,
        bathroom: false,
      },
      vehicleType: '',
    }),
  },
});

export const {
  setFilters,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
