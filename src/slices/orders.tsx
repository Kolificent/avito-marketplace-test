import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { DEFAULT_ORDERS } from '../constants/sliceDefaults';
import OrdersAPI from '../api/orders';

export const updateOrders = createAsyncThunk(
  'orders/updateOrders',
  async (data, { getState }) => {
    const state = getState() as RootState;
    const ordersData = await OrdersAPI.getAllOrders();

    return ordersData;
  },
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState: DEFAULT_ORDERS,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateOrders.fulfilled, (state, action) => {
        return {
          ...state,
          orders: action.payload,
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

const { reducer: ordersReducer } = ordersSlice;
export default ordersReducer;
