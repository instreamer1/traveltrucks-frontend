import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (filters, thunkAPI) => {
    console.log(filters);
    try {
    
      let params = {};
      if (!filters) {
        params = {};
      } else {
        if (filters.location) {
          params.location = filters.location;
        }

        
        if (filters.vehicleType) {
          params.form = filters.vehicleType; 
        }

        const equipment = Object.entries(filters.vehicleEquipment)
          .filter(([key, value]) => value)
          .map(([key]) => key);

        equipment.forEach(eq => {
          params[eq] = true; 
        });
      }

      console.log('Fetching campers with params:', params);
      const response = await axios.get(API_BASE_URL, { params });
      return response.data; 
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
