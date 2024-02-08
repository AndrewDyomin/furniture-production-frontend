import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/collections/all');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setActiveProduct = createAsyncThunk(
  'products/setActiveProduct',
  async (product, thunkAPI) => {
    try {
      return product;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (credentials, thunkAPI) => {
    try {
      const del = await axios.delete('/collections/remove', credentials);
      console.log(del, credentials);
      const res = await axios.get('/collections/all');
      return res.data;
    } catch(error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);