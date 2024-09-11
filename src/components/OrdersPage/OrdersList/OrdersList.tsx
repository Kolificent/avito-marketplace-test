import Grid from '@mui/material/Grid2';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import {
  selectOrders,
  selectOrdersCurrentPage,
  selectOrdersPageCount,
  selectOrdersQuery,
  selectOrdersSort,
  selectStatusFilter,
} from '../../../selectors/ordersSelector';
import { updateOrders } from '../../../slices/orders';
import OrderCard from './OrderCard';

export default function OrdersList() {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrders);
  const currentPage = useAppSelector(selectOrdersCurrentPage);
  const sort = useAppSelector(selectOrdersSort);
  const pageCount = useAppSelector(selectOrdersPageCount);
  const statusFilter = useAppSelector(selectStatusFilter);
  const query = useAppSelector(selectOrdersQuery);

  useEffect(() => {
    dispatch(updateOrders());
  }, [currentPage, sort, pageCount, statusFilter, query, dispatch]);

  if (!orders) return null;
  return (
    <Grid container spacing={2}>
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
