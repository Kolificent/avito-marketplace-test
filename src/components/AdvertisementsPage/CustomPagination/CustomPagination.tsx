import { Box, Pagination } from '@mui/material';
import ItemCountSelector from './ItemCountSelector';

function CustomPagination() {
  return (
    <Box display="flex" flexDirection="row" justifyContent="center" gap={2}>
      <Pagination
        size="small"
        sx={{ display: 'flex', justifyContent: 'center' }}
        count={10}
        shape="rounded"
        page={1}
      />
      <ItemCountSelector />
    </Box>
  );
}

export default CustomPagination;
