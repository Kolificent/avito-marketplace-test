import { Advertisment } from '../api/types';
import { AdsFilters } from '../constants/sliceDefaults';
import { RootState } from '../store/store';

const selectAdvertisements = (state: RootState): Array<Advertisment> =>
  state.advertisementsReducer.advertisements;
const selectCurrentPage = (state: RootState): AdsFilters['currentPage'] =>
  state.advertisementsReducer.filters.currentPage;
const selectMaxPage = (state: RootState): AdsFilters['maxPage'] =>
  state.advertisementsReducer.filters.maxPage;
const selectPageCount = (state: RootState): AdsFilters['pageCount'] =>
  state.advertisementsReducer.filters.pageCount;
const selectSort = (state: RootState): AdsFilters['sort'] =>
  state.advertisementsReducer.filters.sort;
const selectQuery = (state: RootState): Advertisment['name'] =>
  state.advertisementsReducer.query;

export {
  selectAdvertisements,
  selectCurrentPage,
  selectMaxPage,
  selectPageCount,
  selectSort,
  selectQuery,
};
