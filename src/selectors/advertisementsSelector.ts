import { Advertisment } from '../api/types';
import {
  AdvertisementsInfo,
  ItemsPagination,
} from '../constants/sliceDefaults';
import { RootState } from '../store/store';

const selectAdvertisements = (state: RootState): Array<Advertisment> =>
  state.advertisementsReducer.advertisements;
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
  selectAdsCurrentPage,
  selectAdsMaxPage,
  selectAdsPageCount,
  selectAdsSort,
  selectQuery,
};
