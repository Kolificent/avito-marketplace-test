import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { DEFAULT_ORDERS } from '../../constants/slicesDefaults';
import OrdersAPI from '../../api/ordersApi';
import { getOrdersSortById } from '@utils/getSortById';

export const updateOrders = createAsyncThunk(
  'orders/updateOrders',
  async (data, { getState }) => {
    const state = getState() as RootState;
    const currentPage = state.ordersReducer.pagination.currentPage;
    const pageCount = state.ordersReducer.pagination.pageCount;
    const sortId = state.ordersReducer.sort;
    const status = state.ordersReducer.statusFilter;
    const query = state.ordersReducer.query;

    const sortValue = getOrdersSortById(sortId);
    if (!sortValue) return;

    const ordersData = await OrdersAPI.getOrders(
      currentPage,
      pageCount,
      sortValue,
      status,
      query,
    );

    if (!ordersData) return;

    return {
      orders: ordersData.data,
      count: ordersData.headers['x-total-count'],
    };
  },
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState: DEFAULT_ORDERS,
  reducers: {
    changeOrdersSort: (state, action) => {
      return {
        ...state,
        sort: action.payload,
      };
    },
    changeStatusFilter: (state, action) => {
      return {
        ...state,
        statusFilter: action.payload,
      };
    },
    changeOrdersQuery: (state, action) => {
      return {
        ...state,
        query: action.payload,
        pagination: {
          ...state.pagination,
          currentPage: 1,
        },
      };
    },
    changeOrdersCurrentPage: (state, action) => {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload,
        },
      };
    },
    changeOrdersPageCount: (state, action) => {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          pageCount: action.payload,
          currentPage: 1,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateOrders.fulfilled, (state, action) => {
        if (!action.payload) return;

        return {
          ...state,
          orders: action.payload.orders,
          pagination: {
            ...state.pagination,
            maxPage: Math.ceil(
              Number(action.payload.count / state.pagination.pageCount),
            ),
          },
          isLoading: false,
          error: null,
        };
      })
      .addCase(updateOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateOrders.rejected, (state, action) => {
        state.isLoading = false;
        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});

const { actions, reducer: ordersReducer } = ordersSlice;
export const {
  changeOrdersSort,
  changeOrdersQuery,
  changeOrdersCurrentPage,
  changeStatusFilter,
  changeOrdersPageCount,
} = actions;
export default ordersReducer;
