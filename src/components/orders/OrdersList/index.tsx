import { useEffect } from 'react';
import OrderCard from './OrderCard';
import Grid from '@mui/material/Grid2';
import { useAppDispatch, useAppSelector } from '@store';
import { updateOrders } from '@slices/orders';
import {
  selectOrders,
  selectOrdersCurrentPage,
  selectOrdersError,
  selectOrdersLoading,
  selectOrdersPageCount,
  selectOrdersSort,
  selectStatusFilter,
} from '@selectors/ordersSelector';
import { Box, CircularProgress } from '@mui/material';

export default function OrdersList() {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrders);
  const currentPage = useAppSelector(selectOrdersCurrentPage);
  const sort = useAppSelector(selectOrdersSort);
  const pageCount = useAppSelector(selectOrdersPageCount);
  const statusFilter = useAppSelector(selectStatusFilter);
  const isLoading = useAppSelector(selectOrdersLoading);
  const error = useAppSelector(selectOrdersError);

  useEffect(() => {
    dispatch(updateOrders());
  }, [currentPage, sort, pageCount, statusFilter, dispatch]);

  if (isLoading || error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={1}
        width={1}
        padding={8}
        gap={3}
        flexDirection="column"
      >
        <CircularProgress />
        {error}
      </Box>
    );
  }
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
