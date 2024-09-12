import { Advertisment } from '../../types';
import {
  AdvertisementsInfo,
  ItemsPagination,
} from '../../constants/slicesDefaults';
import { RootState } from '../store';

const selectAdvertisements = (state: RootState): Array<Advertisment> =>
  state.advertisementsReducer.advertisements;
const selectAdsLoading = (state: RootState): AdvertisementsInfo['isLoading'] =>
  state.advertisementsReducer.isLoading;
const selectAdsError = (state: RootState): AdvertisementsInfo['error'] =>
  state.advertisementsReducer.error;
const selectAdsCurrentPage = (
  state: RootState,
): ItemsPagination['currentPage'] =>
  state.advertisementsReducer.pagination.currentPage;
const selectAdsMaxPage = (state: RootState): ItemsPagination['maxPage'] =>
  state.advertisementsReducer.pagination.maxPage;
const selectAdsPageCount = (state: RootState): ItemsPagination['pageCount'] =>
  state.advertisementsReducer.pagination.pageCount;
const selectAdsSort = (state: RootState): AdvertisementsInfo['sort'] =>
  state.advertisementsReducer.sort;
const selectQuery = (state: RootState): Advertisment['name'] =>
  state.advertisementsReducer.query;

export {
  selectAdvertisements,
  selectAdsLoading,
  selectAdsError,
  selectAdsCurrentPage,
  selectAdsMaxPage,
  selectAdsPageCount,
  selectAdsSort,
  selectQuery,
};
