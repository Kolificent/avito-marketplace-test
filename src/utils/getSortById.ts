import {
  ADVERTISEMENT_SORT_OPTIONS,
  ORDER_SORT_OPTIONS,
} from '../constants/sortOptions';

export const getAdsSortById = (id: number) => {
  return ADVERTISEMENT_SORT_OPTIONS.find((option) => option.id === id)?.name;
};

export const getOrdersSortById = (id: number) => {
  return ORDER_SORT_OPTIONS.find((option) => option.id === id)?.name;
};
