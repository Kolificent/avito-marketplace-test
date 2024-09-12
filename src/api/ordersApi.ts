import { buildOrdersRequestParams } from '@utils';
import apiClient from './axios';
import type { ItemsPagination, Order, OrdersInfo, SortOptions } from '@types';

const OrdersAPI = {
  getOrders: async (
    page: ItemsPagination['currentPage'],
    count: ItemsPagination['pageCount'],
    sort: SortOptions['name'],
    status: OrdersInfo['statusFilter'],
  ) => {
    try {
      const response = await apiClient.get(
        buildOrdersRequestParams(page, count, sort, status),
      );
      return response;
    } catch (error) {
      console.error('Error fetching orders', error);
    }
  },

  getOrderById: async (orderId: Order['id']) => {
    try {
      const response = await apiClient.get(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching order with id ${orderId}`, error);
    }
  },

  updateOrder: async (orderData: Order) => {
    try {
      const response = await apiClient.patch(
        `/orders/${orderData.id}`,
        orderData,
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating order with id ${orderData.id}`, error);
    }
  },

  deleteOrder: async (orderId: Order['id']) => {
    try {
      await apiClient.delete(`/orders/${orderId}`);
    } catch (error) {
      console.error(`Error deleting order with id ${orderId}`, error);
    }
  },
};

export default OrdersAPI;
