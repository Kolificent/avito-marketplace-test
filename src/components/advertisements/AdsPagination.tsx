import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@store';
import {
  changeAdsCurrentPage,
  changeAdsPageCount,
} from '@slices/advertisements';
import {
  selectAdsCurrentPage,
  selectAdsMaxPage,
  selectAdsPageCount,
} from '@selectors/advertisements';
import CustomPagination from '@ui/CustomPagination';
import { SelectChangeEvent } from '@mui/material';

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
