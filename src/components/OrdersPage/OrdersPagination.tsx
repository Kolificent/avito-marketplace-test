import { SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@store';
import { ChangeEvent } from 'react';

import CustomPagination from '@ui/CustomPagination/CustomPagination';
import {
  selectOrdersCurrentPage,
  selectOrdersMaxPage,
  selectOrdersPageCount,
} from '@selectors/ordersSelector';
import { changeOrdersCurrentPage, changeOrdersPageCount } from '@slices/orders';

function OrdersPagination() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectOrdersCurrentPage);
  const maxPage = useAppSelector(selectOrdersMaxPage);
  const pageCount = useAppSelector(selectOrdersPageCount);

  const handlePageCountChange = (e: SelectChangeEvent) => {
    dispatch(changeOrdersPageCount(e.target.value));
  };

  const handleCurrentPageChange = (e: ChangeEvent<unknown>, value: number) => {
    dispatch(changeOrdersCurrentPage(value));
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

export default OrdersPagination;
