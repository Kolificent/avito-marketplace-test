import Paper from '@mui/material/Paper';
import Filters from '../components/OrdersPage/Filters/Filters';
import OrdersList from '../components/OrdersPage/OrdersList/OrdersList';
import OrdersPagination from '../components/OrdersPage/OrdersPagination';
import { Box } from '@mui/material';

export default function OrdersPage() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <Filters />
      <Box padding={2} gap={2} display="flex" flexDirection="column">
        <OrdersList />
        <OrdersPagination />
      </Box>
    </Paper>
  );
}
