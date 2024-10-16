import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const fetchAllFabrics = createAsyncThunk(
  'fabrics/fetchAllFabrics',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/fabrics/all');
      if (res.data.message) {
        toast.error(`${res.data.message}`)
        return {allOrdersArray: []};
      }
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);