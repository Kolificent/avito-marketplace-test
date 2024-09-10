import axios from 'axios';
import { Advertisment } from './types';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const AdvertisementsAPI = {
  getAdvertisements: async (
    page: number,
    count: number,
    sort: string,
    query?: string,
  ) => {
    try {
      const response = await apiClient.get(
        `/advertisements?_sort=-${sort}&_page=${page}&_per_page=${count}${query ? `&name=${query}` : ''}`,
      );
      console.log(response);

      return response.data;
    } catch (error) {
      console.error('Error fetching advertisements', error);
      // throw error;
    }
  },

  getAdvertisementById: async (advertisementId: Advertisment['id']) => {
    try {
      const response = await apiClient.get(
        `/advertisements/${advertisementId}`,
      );
      return response.data;
    } catch (error) {
      console.error(
        `Error fetching advertisement with id ${advertisementId}`,
        error,
      );
      // throw error;
    }
  },

  createAdvertisement: async () => {
    try {
      const response = await apiClient.post(`/advertisements`);
      return response.data;
    } catch (error) {
      console.error(`Error creating advertisement`, error);
      // throw error;
    }
  },

  updateAdvertisement: async (advertisementData: Advertisment) => {
    try {
      const response = await apiClient.patch(
        `/advertisements/${advertisementData.id}`,
        advertisementData,
      );
      return response.data;
    } catch (error) {
      console.error(
        `Error updating advertisement with id ${advertisementData.id}`,
        error,
      );
      // throw error;
    }
  },

  deleteAdvertisement: async (advertisementId: Advertisment['id']) => {
    try {
      await apiClient.delete(`/advertisements/${advertisementId}`);
    } catch (error) {
      console.error(
        `Error deleting advertisement with id ${advertisementId}`,
        error,
      );
      // throw error;
    }
  },
};

export default AdvertisementsAPI;
