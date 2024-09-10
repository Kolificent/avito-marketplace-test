import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import {
  DEFAULT_ADS_FILTER,
  DEFAULT_ADVERTISEMENTS,
} from '../constants/sliceDefaults';
import AdvertisementsAPI from '../api/advertisements';
import { getSortNameById } from '../utils/getSortById';

export const updateAdvertisements = createAsyncThunk(
  'advertisements/updateAdvertisements',
  async (data, { getState }) => {
    const state = getState() as RootState;
    const currentPage = state.advertisementsReducer.filters.currentPage;
    const pageCount = state.advertisementsReducer.filters.pageCount;
    const sortId = state.advertisementsReducer.filters.sort;
    const query = state.advertisementsReducer.query;

    const sortValue = getSortNameById(sortId);
    if (!sortValue) return;
    console.log(sortValue);
    console.log(query);

    const advertisementsData = await AdvertisementsAPI.getAdvertisements(
      currentPage,
      pageCount,
      sortValue,
      query,
    );

    return advertisementsData;
  },
);

const advertisementsSlice = createSlice({
  name: 'advertisements',
  initialState: DEFAULT_ADVERTISEMENTS,
  reducers: {
    resetFilters: (state) => {
      return { ...state, filters: DEFAULT_ADS_FILTER };
    },
    changeSort: (state, action) => {
      return {
        ...state,
        filters: { ...state.filters, sort: action.payload, currentPage: 1 },
      };
    },
    // changeMaxPage: (state, action) => {
    //   return {
    //     ...state,
    //     filters: {
    //       ...state.filters,
    //       maxPage: Math.min(action.payload, DEFAULT_ADS_FILTER.maxPage),
    //     },
    //   };
    // },
    changeCurrentPage: (state, action) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          currentPage: action.payload,
        },
      };
    },
    changePageCount: (state, action) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          pageCount: action.payload,
        },
      };
    },
    changeQuery: (state, action) => {
      return {
        ...state,
        query: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateAdvertisements.fulfilled, (state, action) => {
        return {
          ...state,
          advertisements: action.payload.data,
          filters: {
            ...state.filters,
            maxPage: Math.min(action.payload.last, DEFAULT_ADS_FILTER.maxPage),
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
  changeSort,
  changeCurrentPage,
  changeQuery,
  changePageCount,
} = actions;
export default advertisementsReducer;
