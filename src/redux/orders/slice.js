import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import { changeArchiveFilter, changeArchiveSearch, changeOrdersFilter, fetchAllOrders, fetchArchivedOrders } from './operations';
import { setActiveOrder } from './operations';

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
    itemsFilter: [],
    archive: [],
    archiveFilter: [],
    archiveSearch: '',
    activeItem: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllOrders.pending, handlePending)
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAllOrders.rejected, handleRejected)
      .addCase(changeOrdersFilter.fulfilled, (state, action) => {
        state.itemsFilter = action.payload;
      })
      .addCase(fetchArchivedOrders.pending, handlePending)
      .addCase(fetchArchivedOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.archive = action.payload;
      })
      .addCase(fetchArchivedOrders.rejected, handleRejected)
      .addCase(changeArchiveFilter.fulfilled, (state, action) => {
        state.archiveFilter = action.payload;
      })
      .addCase(changeArchiveSearch.fulfilled, (state, action) => {
        state.archiveSearch = action.payload;
      })
      .addCase(setActiveOrder.fulfilled, (state, action) => {
        state.activeItem = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.activeItem = {};
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const ordersReducer = ordersSlice.reducer;