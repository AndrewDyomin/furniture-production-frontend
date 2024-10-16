import { createSlice } from '@reduxjs/toolkit';
import { fetchAllFabrics } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fabricsSlice = createSlice({
  name: 'fabrics',
  initialState: {
    items: [],
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllFabrics.pending, handlePending)
      .addCase(fetchAllFabrics.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAllFabrics.rejected, handleRejected);
  },
});

export const fabricsReducer = fabricsSlice.reducer;