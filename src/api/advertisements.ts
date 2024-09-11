import axios from 'axios';
import { Advertisment } from './types';
import { v4 as uuidv4 } from 'uuid';

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
        `/advertisements?_sort=${sort}&_order=desc&_page=${page}&_limit=${count}${query ? `&name_like=${query}` : ''}`,
      );
      console.log(response);

      return response;
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

  createAdvertisement: async (name, price, imageUrl, description?) => {
    try {
      const date = new Date();
      const response = await apiClient.post(
        `/advertisements`,
        JSON.stringify({
          id: uuidv4(),
          name: name,
          description: description ? description : '',
          price: price,
          createdAt: date.toDateString,
          views: 0,
          likes: 0,
          imageUrl: imageUrl,
        }),
      );
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
