import { ChangeEvent } from 'react';
import type { ItemsPagination } from '@types';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { PAGE_COUNTS } from '@constants/pageCounts';

interface CustomPaginationProps {
  currentPage: ItemsPagination['currentPage'];
  maxPage: ItemsPagination['maxPage'];
  pageCount: ItemsPagination['pageCount'];
  onCurrentPageChange: (e: ChangeEvent<unknown>, value: number) => void;
  onPageCountChange: (e: SelectChangeEvent) => void;
}

const PAGINATION_LABEL = 'Количество элементов на странице';

function CustomPagination({
  currentPage,
  maxPage,
  pageCount,
  onCurrentPageChange,
  onPageCountChange,
}: CustomPaginationProps) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function handleCurrentPageChange(
    event: React.ChangeEvent<unknown>,
    value: number,
  ) {
    scrollToTop();
    onCurrentPageChange(event, value);
  }

  function handlePageCountChange(event: SelectChangeEvent) {
    scrollToTop();
    onPageCountChange(event);
  }

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" gap={2}>
      <Pagination
        size="small"
        sx={{ display: 'flex', justifyContent: 'center' }}
        count={maxPage}
        shape="rounded"
        page={currentPage}
        onChange={handleCurrentPageChange}
      />
      <Box sx={{ width: 320 }}>
        <FormControl fullWidth>
          <InputLabel>{PAGINATION_LABEL}</InputLabel>
          <Select
            value={pageCount.toString()}
            label={PAGINATION_LABEL}
            onChange={handlePageCountChange}
          >
            {PAGE_COUNTS.map((count) => (
              <MenuItem key={count} value={count}>
                {count}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default CustomPagination;
