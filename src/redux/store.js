import { configureStore } from "@reduxjs/toolkit";

import campersReducer from './campers/slice'
import filtersReducer from './filters/filtersSlice';


const store = configureStore({
  reducer: {
    filters: filtersReducer,
    campers: campersReducer,
  },
});

export default store;
