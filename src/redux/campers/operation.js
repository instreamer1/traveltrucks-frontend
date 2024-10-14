import { createAsyncThunk } from '@reduxjs/toolkit'; 
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (filters, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams();

      if (filters) {
        const { location, vehicleType, vehicleEquipment } = filters;

        if (location) params.append('location', location);
        if (vehicleType) params.append('form', vehicleType);

        Object.keys(vehicleEquipment).forEach((key) => {
          if (vehicleEquipment[key]) {
            params.append(key, 'true');
          }
        });
      }

      const query = params.toString() ? `?${params.toString()}` : '';
      const response = await axios.get(`${API_BASE_URL}${query}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : { message: error.message }
      );
    }
  }
);