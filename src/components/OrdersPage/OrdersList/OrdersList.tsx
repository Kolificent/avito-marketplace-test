import Grid from '@mui/material/Grid2';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { selectOrders } from '../../../selectors/ordersSelector';
import { updateOrders } from '../../../slices/orders';
import OrderCard from './OrderCard';

export default function OrdersList() {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrders);

  useEffect(() => {
    dispatch(updateOrders());
  }, [dispatch]);

  if (!orders) return null;
  return (
    <Grid container spacing={2} padding={2}>
      {orders.map((order) => (
        <Grid width={1} key={order.id}>
          <OrderCard
            id={order.id}
            status={order.status}
            createdAt={order.createdAt}
            items={order.items}
            total={order.total}
          />
        </Grid>
      ))}
    </Grid>
  );
}
