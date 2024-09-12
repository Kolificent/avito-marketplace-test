import { SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@store';
import {
  selectAdsCurrentPage,
  selectAdsMaxPage,
  selectAdsPageCount,
} from '@selectors/advertisementsSelector';
import { ChangeEvent } from 'react';
import {
  changeAdsCurrentPage,
  changeAdsPageCount,
} from '@slices/advertisements';
import CustomPagination from '../ui/CustomPagination/CustomPagination';

function AdsPagination() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectAdsCurrentPage);
  const maxPage = useAppSelector(selectAdsMaxPage);
  const pageCount = useAppSelector(selectAdsPageCount);

  const handlePageCountChange = (e: SelectChangeEvent) => {
    dispatch(changeAdsPageCount(e.target.value));
  };

  const handleCurrentPageChange = (e: ChangeEvent<unknown>, value: number) => {
    dispatch(changeAdsCurrentPage(value));
  };

  return (
    <CustomPagination
      maxPage={maxPage}
      currentPage={currentPage}
      pageCount={pageCount}
      onPageCountChange={handlePageCountChange}
      onCurrentPageChange={handleCurrentPageChange}
    />
  );
}

export default AdsPagination;
