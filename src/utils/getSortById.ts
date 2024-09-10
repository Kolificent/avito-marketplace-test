import { ADVERTISEMENT_SORT_OPTIONS } from '../constants/sortOptions';

export const getSortNameById = (id: number) => {
  return ADVERTISEMENT_SORT_OPTIONS.find((option) => option.id === id)?.name;
};
