import { TABS } from '@constants/navigationConsts';

export const getTabById = (id: number) => {
  return TABS.find((page) => page.id === id);
};
