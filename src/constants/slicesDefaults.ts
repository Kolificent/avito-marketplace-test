import type {
  AdvertisementsInfo,
  DialogStatus,
  ItemsPagination,
  OrdersInfo,
} from '@types';

const DEFAULT_PAGINATION: ItemsPagination = {
  currentPage: 1,
  maxPage: 40,
  pageCount: 10,
};

const DEFAULT_ADVERTISEMENTS: AdvertisementsInfo = {
  advertisements: [],
  sort: 0,
  query: '',
  pagination: DEFAULT_PAGINATION,
  isLoading: false,
  error: null,
};

const DEFAULT_ORDERS: OrdersInfo = {
  orders: [],
  pagination: DEFAULT_PAGINATION,
  sort: 0,
  statusFilter: 7,
  isLoading: false,
  error: null,
};

const DEFAULT_DIALOG: DialogStatus = {
  isOpen: false,
};

export {
  DEFAULT_ADVERTISEMENTS,
  DEFAULT_ORDERS,
  DEFAULT_PAGINATION,
  DEFAULT_DIALOG,
};
