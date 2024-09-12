import axios from 'axios';
import type { ItemsPagination, Order, OrdersInfo } from '@types';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const OrdersAPI = {
  getOrders: async (
    page: ItemsPagination['currentPage'],
    count: ItemsPagination['pageCount'],
    sort: OrdersInfo['sort'],
    status: OrdersInfo['statusFilter'],
    query: OrdersInfo['query'],
  ) => {
    try {
      const response = await apiClient.get(
        `/orders?${query ? `items.id=${query}` : ''}${status === 7 ? '' : `status=${status}&`}_sort=${sort}&_order=desc&_page=${page}&_limit=${count}`,
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
