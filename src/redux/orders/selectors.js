export const selectAllOrders = state => state.orders.items;
export const selectArchivedOrders = state => state.orders.archive;
export const selectActiveOrder = state => state.orders.activeItem;
export const selectLoading = state => state.orders.isLoading;