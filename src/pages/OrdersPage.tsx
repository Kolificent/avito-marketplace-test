import Paper from '@mui/material/Paper';
import OrdersFilters from '@/components/orders/OrdersFilters';
import OrdersList from '@/components/orders/OrdersList';
import OrdersPagination from '@/components/orders/OrdersPagination';
import { Box } from '@mui/material';

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
