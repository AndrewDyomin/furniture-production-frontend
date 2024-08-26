import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const fetchAllDrufts = createAsyncThunk(
  'drufts/fetchAllDrufts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/drufts/all');
      if (res.data.message) {
        toast.error(`${res.data.message}`)
        return {druftssArray: []};
      }
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setActiveDruft = createAsyncThunk(
  'drufts/setActiveDruft',
  async (druft, thunkAPI) => {
    try {
      return druft;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
