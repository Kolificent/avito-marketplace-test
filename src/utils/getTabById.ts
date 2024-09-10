import { TABS } from '../constants/navigation';

export const getTabById = (id: number) => {
  return TABS.find((page) => page.id === id);
};
