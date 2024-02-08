import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
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
      await axios.delete('/collections/remove', {
        data: credentials,
        headers: {
          'Content-Type': 'application/json'
        }});
      const dispatch = useDispatch();
      const res = dispatch(fetchAllProducts);
      return res;
    } catch(error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/collections/update', {
        data: credentials,
        headers: {
          'Content-Type': 'application/json'
        }});
      const dispatch = useDispatch();
      const res = dispatch(fetchAllProducts);
      return res;
    } catch(error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);