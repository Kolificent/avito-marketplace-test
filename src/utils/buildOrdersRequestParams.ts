import type { ItemsPagination, OrdersInfo, SortOptions } from '@types';

export function buildOrdersRequestParams(
  page: ItemsPagination['currentPage'],
  count: ItemsPagination['pageCount'],
  sort: SortOptions['name'],
  status: OrdersInfo['statusFilter'],
) {
  return `/orders?${status === 7 ? '' : `status=${status}&`}_sort=${sort}&_order=desc&_page=${page}&_limit=${count}`;
}
