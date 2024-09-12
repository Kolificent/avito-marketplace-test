import type { AdvertisementsInfo, ItemsPagination, SortOptions } from '@types';

export function buildAdsRequestParams(
  page: ItemsPagination['currentPage'],
  count: ItemsPagination['pageCount'],
  sort: SortOptions['name'],
  query?: AdvertisementsInfo['query'],
) {
  return `/advertisements?_sort=${sort}&_order=desc&_page=${page}&_limit=${count}${query ? `&name_like=${query}` : ''}`;
}
