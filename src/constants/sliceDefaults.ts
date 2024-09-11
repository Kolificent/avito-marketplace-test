import { Advertisment, Order } from '../api/types';

interface AdvertisementsInfo {
  advertisements: Array<Advertisment>;
  pagination: ItemsPagination;
  // ! допилилить типизацию сортировки
  sort: number;
  query: Advertisment['name'];
  isLoading: boolean;
  error: string | null;
}

interface OrdersInfo {
  orders: Array<Order>;
  pagination: ItemsPagination;
  query: Advertisment['id'];
  statusFilter: Order['status'] | 7;
  sort: number;
  isLoading: boolean;
  error: string | null;
}

interface ItemsPagination {
  currentPage: number;
  maxPage: number;
  pageCount: number;
}

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
  query: '',
  pagination: DEFAULT_PAGINATION,
  sort: 0,
  statusFilter: 7,
  isLoading: false,
  error: null,
};

interface DialogStatus {
  isOpen: boolean;
}

const DEFAULT_DIALOG: DialogStatus = {
  isOpen: false,
};

export type { ItemsPagination, AdvertisementsInfo, OrdersInfo, DialogStatus };

export {
  DEFAULT_ADVERTISEMENTS,
  DEFAULT_ORDERS,
  DEFAULT_PAGINATION,
  DEFAULT_DIALOG,
};
