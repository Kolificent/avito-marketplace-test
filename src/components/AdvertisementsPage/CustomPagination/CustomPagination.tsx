import { Box, Pagination } from '@mui/material';
import ItemCountSelector from './ItemCountSelector';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import {
  selectCurrentPage,
  selectMaxPage,
} from '../../../selectors/advertisementsSelector';
import { ChangeEvent } from 'react';
import { changeCurrentPage } from '../../../slices/advertisements';

function CustomPagination() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const maxPage = useAppSelector(selectMaxPage);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    dispatch(changeCurrentPage(value));
  };

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" gap={2}>
      <Pagination
        size="small"
        sx={{ display: 'flex', justifyContent: 'center' }}
        count={maxPage}
        shape="rounded"
        page={currentPage}
        onChange={handleChange}
      />
      <ItemCountSelector />
    </Box>
  );
}

export default CustomPagination;
