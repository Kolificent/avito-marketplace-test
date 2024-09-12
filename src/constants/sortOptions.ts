import { SortOptions } from '../types';

export const ORDER_SORT_OPTIONS: Array<SortOptions> = [
  { id: 0, name: 'total', label: 'стоимости' },
  { id: 1, name: 'createdAt', label: 'дате' },
];

export const ADVERTISEMENT_SORT_OPTIONS: Array<SortOptions> = [
  { id: 0, name: 'price', label: 'стоимости' },
  { id: 1, name: 'views', label: 'просмотрам' },
  { id: 2, name: 'likes', label: 'лайкам' },
];
