import axios from 'axios';
import { Order } from './types';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const OrdersAPI = {
  getAllOrders: async () => {
    try {
      const response = await apiClient.get('/orders');

      return response.data;
    } catch (error) {
      console.error('Error fetching orders', error);
      // throw error;
    }
  },

  getOrderById: async (orderId: Order['id']) => {
    try {
      const response = await apiClient.get(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching order with id ${orderId}`, error);
      // throw error;
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
      // throw error;
    }
  },

  deleteOrder: async (orderId: Order['id']) => {
    try {
      await apiClient.delete(`/orders/${orderId}`);
    } catch (error) {
      console.error(`Error deleting order with id ${orderId}`, error);
      // throw error;
    }
  },
};

export default OrdersAPI;
