import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllComponents = createAsyncThunk(
  'components/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/components/all');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addComponent = createAsyncThunk(
  'components/addComponent',
  async (data, thunkAPI) => {
    try {
      await axios.post('/components/add', { data });
      const response = thunkAPI.dispatch(fetchAllComponents());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateComponent = createAsyncThunk(
  'components/update',
  async (data, thunkAPI) => {
    try {
      await axios.post('/components/remove', { data });
      const response = thunkAPI.dispatch(fetchAllComponents());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteComponent = createAsyncThunk(
  'components/delete',
  async (id, thunkAPI) => {
    try {
      await axios.delete('/components/remove', { id });
      const response = thunkAPI.dispatch(fetchAllComponents());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
