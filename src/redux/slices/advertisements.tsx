import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store';
import {
  DEFAULT_PAGINATION,
  DEFAULT_ADVERTISEMENTS,
} from '@constants/slicesDefaults';
import AdvertisementsAPI from '@api/advertisementsApi';
import { getAdsSortById } from '@utils/getSortById';

export const updateAdvertisements = createAsyncThunk(
  'advertisements/updateAdvertisements',
  async (data, { getState }) => {
    const state = getState() as RootState;
    const currentPage = state.advertisementsReducer.pagination.currentPage;
    const pageCount = state.advertisementsReducer.pagination.pageCount;
    const sortId = state.advertisementsReducer.sort;
    const query = state.advertisementsReducer.query;

    const sortValue = getAdsSortById(sortId);
    if (!sortValue) return;

    const advertisementsData = await AdvertisementsAPI.getAdvertisements(
      currentPage,
      pageCount,
      sortValue,
      query,
    );

    if (!advertisementsData) return;

    return {
      ads: advertisementsData.data,
      count: advertisementsData.headers['x-total-count'],
    };
  },
);

const advertisementsSlice = createSlice({
  name: 'advertisements',
  initialState: DEFAULT_ADVERTISEMENTS,
  reducers: {
    resetFilters: (state) => {
      return { ...state, filters: DEFAULT_PAGINATION };
    },
    changeAdsSort: (state, action) => {
      return {
        ...state,
        sort: action.payload,
        pagination: { ...state.pagination, currentPage: 1 },
      };
    },
    changeAdsCurrentPage: (state, action) => {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload,
        },
      };
    },
    changeAdsPageCount: (state, action) => {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          pageCount: action.payload,
          currentPage: 1,
        },
      };
    },
    changeAdsQuery: (state, action) => {
      return {
        ...state,
        query: action.payload,
        pagination: {
          ...state.pagination,
          currentPage: 1,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateAdvertisements.fulfilled, (state, action) => {
        if (!action.payload) return;

        return {
          ...state,
          advertisements: action.payload.ads,
          pagination: {
            ...state.pagination,
            maxPage: Math.ceil(
              Number(action.payload.count / state.pagination.pageCount),
            ),
          },
          isLoading: false,
          error: null,
        };
      })
      .addCase(updateAdvertisements.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAdvertisements.rejected, (state, action) => {
        state.isLoading = false;
        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});

const { actions, reducer: advertisementsReducer } = advertisementsSlice;
export const {
  resetFilters,
  changeAdsSort,
  changeAdsCurrentPage,
  changeAdsQuery,
  changeAdsPageCount,
} = actions;
export default advertisementsReducer;
