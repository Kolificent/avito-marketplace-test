import {
  OrdersFilters,
  OrdersList,
  OrdersPagination,
} from '@components/orders';
import { Box, Paper } from '@mui/material';

export default function OrdersPage() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <OrdersFilters />
      <Box padding={2} gap={2} display="flex" flexDirection="column">
        <OrdersList />
        <OrdersPagination />
      </Box>
    </Paper>
  );
}
