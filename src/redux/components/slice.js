import { createSlice } from '@reduxjs/toolkit';
import { fetchAllComponents, addComponent, updateComponent, deleteComponent } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const componentsSlice = createSlice({
  name: 'components',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllComponents.pending, handlePending)
      .addCase(fetchAllComponents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAllComponents.rejected, handleRejected)
      .addCase(addComponent.pending, handlePending)
      .addCase(addComponent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addComponent.rejected, handleRejected)
      .addCase(updateComponent.pending, handlePending)
      .addCase(updateComponent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(updateComponent.rejected, handleRejected)
      .addCase(deleteComponent.pending, handlePending)
      .addCase(deleteComponent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(deleteComponent.rejected, handleRejected);
  },
});

export const componentsReducer = componentsSlice.reducer;