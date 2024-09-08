import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Filters from '../components/OrdersPage/Filters/Filters';
import OrdersList from '../components/OrdersPage/OrdersList/OrdersList';

export default function OrdersPage() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <Filters />
      <OrdersList />
    </Paper>
  );
}
