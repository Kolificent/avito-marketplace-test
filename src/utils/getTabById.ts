import { tabs } from '../constants/categories';

export const getTabById = (id: number) => {
  return tabs.find((page) => page.id === id);
};
