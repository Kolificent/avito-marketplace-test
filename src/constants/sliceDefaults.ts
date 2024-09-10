import { Advertisment, Order } from '../api/types';

interface AdvertisementsFetch {
  advertisements: Array<Advertisment>;
  filters: AdsFilters;
  query: Advertisment['name'];
  isLoading: boolean;
  error: string | null;
}

interface OrdersFetch {
  orders: Array<Order>;
  isLoading: boolean;
  error: string | null;
}

interface AdsFilters {
  sort: number;
  currentPage: number;
  maxPage: number;
  pageCount: number;
}

const DEFAULT_ADS_FILTER = {
  sort: 0,
  currentPage: 1,
  maxPage: 40,
  pageCount: 10,
};

const DEFAULT_ADVERTISEMENTS: AdvertisementsFetch = {
  advertisements: [],
  query: '',
  filters: DEFAULT_ADS_FILTER,
  isLoading: false,
  error: null,
};

const DEFAULT_ORDERS: OrdersFetch = {
  orders: [],
  isLoading: false,
  error: null,
};

export type { AdsFilters };

export { DEFAULT_ADVERTISEMENTS, DEFAULT_ORDERS, DEFAULT_ADS_FILTER };
