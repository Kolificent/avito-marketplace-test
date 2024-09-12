import apiClient from './axios';
import type { Advertisment } from '@types';
import { buildAdsRequestParams } from '@utils';
import { v4 as uuidv4 } from 'uuid';

const AdvertisementsAPI = {
  getAdvertisements: async (
    page: number,
    count: number,
    sort: string,
    query?: string,
  ) => {
    try {
      const response = await apiClient.get(
        buildAdsRequestParams(page, count, sort, query),
      );
      return response;
    } catch (error) {
      console.error('Error fetching advertisements', error);
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
      return null;
    }
  },

  createAdvertisement: async (
    name: Advertisment['name'],
    price: Advertisment['price'],
    imageUrl?: Advertisment['imageUrl'],
    description?: Advertisment['description'],
  ) => {
    try {
      const date = new Date();
      const response = await apiClient.post(
        `/advertisements`,
        JSON.stringify({
          id: uuidv4(),
          name: name,
          description: description || '',
          price: price,
          createdAt: date,
          views: 0,
          likes: 0,
          imageUrl: imageUrl || '',
        }),
      );
      return response.data;
    } catch (error) {
      console.error(`Error creating advertisement`, error);
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
    }
  },

  deleteAdvertisement: async (advertisementId: Advertisment['id']) => {
    try {
      await apiClient.delete(`/advertisements/${advertisementId}`);
      return;
    } catch (error) {
      console.error(
        `Error deleting advertisement with id ${advertisementId}`,
        error,
      );
    }
  },
};

export default AdvertisementsAPI;
