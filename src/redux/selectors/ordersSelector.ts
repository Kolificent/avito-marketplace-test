import { Order } from '../../types';
import { OrdersInfo, ItemsPagination } from '../../constants/slicesDefaults';
import { RootState } from '../store';

const selectOrders = (state: RootState): Array<Order> =>
  state.ordersReducer.orders;
const selectOrdersLoading = (state: RootState): OrdersInfo['isLoading'] =>
  state.ordersReducer.isLoading;
const selectOrdersError = (state: RootState): OrdersInfo['error'] =>
  state.ordersReducer.error;
const selectOrdersCurrentPage = (
  state: RootState,
): ItemsPagination['currentPage'] => state.ordersReducer.pagination.currentPage;
const selectOrdersMaxPage = (state: RootState): ItemsPagination['maxPage'] =>
  state.ordersReducer.pagination.maxPage;
const selectOrdersPageCount = (
  state: RootState,
): ItemsPagination['pageCount'] => state.ordersReducer.pagination.pageCount;
const selectOrdersSort = (state: RootState): OrdersInfo['sort'] =>
  state.ordersReducer.sort;
const selectStatusFilter = (state: RootState): OrdersInfo['statusFilter'] =>
  state.ordersReducer.statusFilter;
const selectOrdersQuery = (state: RootState): OrdersInfo['query'] =>
  state.ordersReducer.query;

export {
  selectOrders,
  selectOrdersLoading,
  selectOrdersError,
  selectOrdersCurrentPage,
  selectOrdersMaxPage,
  selectOrdersPageCount,
  selectOrdersSort,
  selectStatusFilter,
  selectOrdersQuery,
};
