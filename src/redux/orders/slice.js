import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import { fetchMebtownOrders } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMebtownOrders.pending, handlePending)
      .addCase(fetchMebtownOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchMebtownOrders.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const ordersReducer = ordersSlice.reducer;